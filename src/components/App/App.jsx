import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";
import { useLocation } from 'react-router-dom';
import { userDataConst } from "../../utils/constants";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});
  const [collectionData, setCollectionData] = useState({});
  const [serverError, setServerError] = useState({})
  const [userDataToRender, setUserDataToRender] = useState(userDataConst)

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

  function handleAddSkill(name) {
    let idRandom = Math.floor(Math.random() * 1000) + 1;
    console.log('idrandom', idRandom)
    const newSkill = { id: idRandom, name: name, rate: 0, notes: '', editable: true };
    setUserDataToRender([newSkill, ...userDataToRender]);
    Api.addSkill(name)
      .then((res) => {
        setUserData([...userData, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log("userDataToRender", userDataToRender); // Отслеживаем изменения skillInfo
  }, [userDataToRender]);
  

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
    console.log("slillData:", skillData)
    console.log("updatedUserDataToRender:", updatedUserDataToRender)

    setUserDataToRender(updatedUserDataToRender);
    
  
    Api.editSkill(skillData)
      .then((res) => {
        setUserData([res, ...userData]);
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
      <InfoToolTip />
    </div>
  );
}

export default App;
