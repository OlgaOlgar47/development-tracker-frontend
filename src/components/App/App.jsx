import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";

function App() {
  const [userData, setUserData] = useState({});
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});
  const [collectionData, setCollectionData] = useState({});

  useEffect(() => {
    Promise.all([Api.getSkills(), Api.getCourses(), Api.getCollections()])
      .then(([coursesData, skillsData, collectionData]) => {
        setCoursesData(coursesData);
        setSkillsData(skillsData);
        setCollectionData(collectionData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [skillsData]);

  function handleAddSkill(name) {
    console.log(name);
    Api.addSkill(name)
      .then((res) => {
        setUserData([res, ...userData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditSkill(skillData) {
    console.log(skillData);
    Api.editSkill(skillData)
      .then((res) => {
        setUserData([res, ...userData]);
      })
      .catch((err) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <Header />
      <Main
        skillsData={skillsData}
        coursesData={coursesData}
        handleAddSkill={handleAddSkill}
        handleDeleteSkill={handleDeleteSkill}
        collectionData={collectionData}
        handleEditSkill={handleEditSkill}
      />
    </div>
  );
}

export default App;
