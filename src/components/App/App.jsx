import { React, useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";
import { useLocation } from "react-router-dom";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

export default function App() {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});
  const [coursesDataForCollection, setCoursesDataForCollection] = useState({});
  const [courseForSkillEditor, setCourseForSkillEditor] = useState({});
  const [collectionData, setCollectionData] = useState([]);
  const [serverError, setServerError] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isSuccessfull: false,
    customMessage: "",
  });

  const toggleVisibility = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false); // Скрываем окно через 3 секунды
    }, 3000);
  };

  function handleInfoTooltip(effect, customMessage) {
    setIsInfoTooltip((prevState) => ({
      ...prevState,
      isSuccessfull: effect,
      customMessage: customMessage,
    }));
    toggleVisibility();
  }

  useEffect(() => {
    Promise.all([Api.getUserData(), Api.getSkills(), Api.getCourses()])
      .then(([userData, skillsData, coursesData]) => {
        setUserData(userData);
        setCoursesData(coursesData);
        setSkillsData(skillsData);
      })
      .catch((err) => {
        setServerError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (location.pathname === "/collections") {
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

      // Выполняем запрос только если мы находимся на ../skills роуте с collectionId
      Api.getCoursesForCollection(collectionId)
        .then((res) => {
          setCoursesDataForCollection(res);
        })
        .catch((err) => {
          setServerError(true);
          console.log(err);
        });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith("/skill-editor/")) {
      const pathParts = location.pathname.split("/");
      const skillId = parseInt(pathParts[pathParts.length - 1]);
      const foundSkill = userData.find((skill) => skill.id === skillId);
      

      if (foundSkill) {
        const skill = foundSkill.skill;

        Api.getCourseForSkillEditor(skill)
          .then((res) => {
            setCourseForSkillEditor(res);
          })
          .catch((err) => {
            setServerError(true);
            console.log(err);
          });
      }
    }
  }, [location.pathname, userData]);
  

  function handleAddSkill(data) {
    Api.addSkill(data.name)
      .then((res) => {
        setUserData([res, ...userData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditSkill(skillData) {
    Api.editSkill(skillData)
      .then((res) => {
        const updatedUserData = userData.map((skill) => {
          if (skill.id === res.id) {
            return {
              ...skill,
              rate: skillData.rate !== undefined ? skillData.rate : skill.rate,
              notes:
                skillData.notes !== undefined ? skillData.notes : skill.notes,
            };
          }
          return skill;
        });

        setUserData(updatedUserData);
        handleInfoTooltip(true, "Проверь на главном экране");
      })
      .catch((err) => {
        handleInfoTooltip(false, "Попробуй сохранить еще раз");
        console.log(err);
      });
  }

  function handleDeleteSkill(id) {
    Api.deleteSkill(id)
      .then(() => {
        setUserData(
          userData.filter((skill) => {
            return skill.id !== id;
          })
        );
        handleInfoTooltip(true, "Навык удалён");
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltip(false, "Попробуй удалить ещё раз");
      });
  }

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
        courseForSkillEditor={courseForSkillEditor}
      />
      <InfoTooltip
        isVisible={isVisible}
        isSuccessfull={isInfoTooltip.isSuccessfull}
        customMessage={isInfoTooltip.customMessage}
      />
    </div>
  );
}
