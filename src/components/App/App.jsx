import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";
import { useLocation } from 'react-router-dom';
import { userDataConst } from "../../utils/constants";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});
  const [collectionData, setCollectionData] = useState({});
  const [serverError, setServerError] = useState({});
  const [userDataToRender, setUserDataToRender] = useState(userDataConst);
  const [isVisible, setIsVisible] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({ isSucessfull: false });

 // Логика для управления значением isInfoTooltip
 function handleInfoTooltip(effect) {
  setIsInfoTooltip({ ...isInfoTooltip, isSucessfull: effect });
}
  
  useEffect(() => {
    Promise.all([
      Api.getUserData(),
      Api.getSkills(),
      Api.getCourses()
    ])
      .then(([userData, coursesData, skillsData, collectionData]) => {
        setUserData(userData);
        setCoursesData(coursesData);
        setSkillsData(skillsData);
      })
      .catch((err) => {
        setServerError(true);
        console.log(err);
      });
  }, [skillsData]);

  useEffect(() => {
    if (location.pathname === '/collections') {
      // Выполняем запрос только если мы находимся на нужном роуте
      Api.getCollections()
        .then(collectionData => {
          setCollectionData(collectionData);
        })
        .catch(err => {
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
    const newSkills = data.map(item => {
      let idRandom = Math.floor(Math.random() * 1000) + 1;
      return { id: idRandom, name: item.name, rate: 0, notes: '', editable: true };
    });
  
    setUserDataToRender(prevData => [...newSkills, ...prevData]);
    
    Api.addSkill(data)
      .then((res) => {
        setUserData([...userData, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  function handleEditSkill(skillData) {
    console.log('handleEditSkill работает')
    const updatedUserDataToRender = userDataToRender.map(skill => {
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
        setUserData([res, ...userData]);
        // handleInfoTooltip(true);
      })
      .catch((err) => {
        console.log(err);
        // handleInfoTooltip(false);
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

  return (
    <div className="page">
      <Header />
      <Main
        serverError={serverError}
        userDataToRender={userDataToRender}
        skillsData={skillsData}
        coursesData={coursesData}
        handleAddSkill={handleAddSkill}
        handleDeleteSkill={handleDeleteSkill}
        collectionData={collectionData}
        handleEditSkill={handleEditSkill}
      />
      <InfoTooltip effect={isInfoTooltip} isVisible={isVisible} />
    </div>
  );
}

export default App;
