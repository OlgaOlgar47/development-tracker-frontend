import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";
import { useLocation } from "react-router-dom";
import { userDataConst } from "../../utils/constants";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
// import { useParams } from "react-router-dom";

function App() {
  // const { collectionId } = useParams();
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});
  const [coursesDataForCollection, setCoursesDataForCollection] = useState({});
  const [collectionData, setCollectionData] = useState([]);
  const [serverError, setServerError] = useState({});
  const [userDataToRender, setUserDataToRender] = useState(userDataConst);
  const [isVisible, setIsVisible] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({ isSucessfull: false });

  // Логика для управления значением isInfoTooltip
  function handleInfoTooltip(effect) {
    setIsInfoTooltip({ ...isInfoTooltip, isSucessfull: effect });
  }

  useEffect(() => {
    Promise.all([Api.getUserData(), Api.getSkills(), Api.getCourses()])
      .then(([userData, skillsData, coursesData]) => {
        setUserData(userData);
        setCoursesData(coursesData);
        console.log('coursesData пришли в Апп: ', coursesData);
        setSkillsData(skillsData);
      })
      .catch((err) => {
        setServerError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (location.pathname === "/collections") {
      // Выполняем запрос только если мы находимся на нужном роуте
      Api.getCollections()
        .then((collectionData) => {
          setCollectionData(collectionData);
        })
        .catch((err) => {
          setServerError(true);
          console.log(err);
        });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith("/collections/skills/")) {
      // Разделяем URL, чтобы получить значение параметра collectionId
      const pathParts = location.pathname.split("/");
      const collectionId = pathParts[pathParts.length - 1]; // Получаем последнюю часть URL как collectionId
  
      // Выполняем запрос только если мы находимся на нужном роуте с collectionId
      Api.getCoursesForCollection(collectionId)
        .then((res) => {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', res);
          setCoursesDataForCollection(res);
        })
        .catch((err) => {
          setServerError(true);
          console.log(err);
        });
    }
  }, [location.pathname]);
  
  const toggleVisibility = () => {
    setIsVisible(true); // Показываем элемент
    setTimeout(() => {
      setIsVisible(false); // Скрываем элемент через 3 секунды
    }, 3000);
  };

  function handleAddSkill(data) {
    const newSkills = data.map((item) => {
      let idRandom = Math.floor(Math.random() * 1000) + 1;
      return {
        id: idRandom,
        name: item.name,
        rate: 0,
        notes: "",
        editable: true,
      };
    });

    setUserDataToRender((prevData) => [...newSkills, ...prevData]);

    Api.addSkill(data)
      .then((res) => {
        setUserData([...userData, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditSkill(skillData) {
    console.log("handleEditSkill работает");
    const updatedUserDataToRender = userData.map((skill) => {
      if (skill.id === skillData.id) {
        return {
          ...skill,
          name: skillData.name !== undefined ? skillData.name : skill.name,
          rate: skillData.rate !== undefined ? skillData.rate : skill.rate,
          notes: skillData.notes !== undefined ? skillData.notes : skill.notes,
        };
      }
      return skill;
    });

    setUserDataToRender(updatedUserDataToRender);
    toggleVisibility();
    handleInfoTooltip(true);

    Api.editSkill(skillData)
    .then((res) => {
      console.log('res After Edit: ', res);
      const updatedUserDataToRender = userData.map((skill) => {
        if (skill.id === skillData.id) {
          return {
            ...skill,
            name: skillData.name !== undefined ? skillData.name : skill.name,
            rate: skillData.rate !== undefined ? skillData.rate : skill.rate,
            notes: skillData.notes !== undefined ? skillData.notes : skill.notes,
          };
        }
        return skill;
      });
  
      // Обновляем только измененный навык в состоянии userData
      setUserData(updatedUserDataToRender);
      console.log('userData After Edit: ', updatedUserDataToRender); // Печатаем обновленные данные
    })
    .catch((err) => {
      console.log(err);
    });
  
  
  }

  function handleDeleteSkill(id) {
    setUserDataToRender(
      userDataToRender.filter((skill) => {
        return skill.id !== id;
      })
    );

    Api.deleteSkill(id)
      .then(() => {
        setUserData(
          userData.filter((skill) => {
            return skill.id !== id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }


  //   useEffect(() => {
  //   console.log("userDataApp", userData);
  // }, [userData]);

  return (
    <div className="page">
      <Header />
      <Main
        userData={userData}
        serverError={serverError}
        skillsData={skillsData}
        coursesData={coursesData}
        coursesDataForCollection={coursesDataForCollection}
        handleAddSkill={handleAddSkill}
        handleDeleteSkill={handleDeleteSkill}
        collectionData={collectionData}
        handleEditSkill={handleEditSkill}
        toggleVisibility={toggleVisibility}
        handleInfoTooltip={handleInfoTooltip}
      />
      <InfoTooltip effect={isInfoTooltip} isVisible={isVisible} />
    </div>
  );
}

export default App;
