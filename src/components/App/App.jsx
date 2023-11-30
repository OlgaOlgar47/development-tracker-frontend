import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";

function App() {
  const [userData, setUserData] = useState({});
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});
  const [collectionsData, setCollectionsData] = useState({});

  useEffect(() => {
    Promise.all([Api.getSkills(), Api.getCourses(), Api.getCollections()])
      .then(([coursesData, skillsData, collectionsData]) => {
        setCoursesData(coursesData);
        setSkillsData(skillsData);
        setCollectionsData(collectionsData);
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
        collectionsData={collectionsData}
      />
    </div>
  );
}

export default App;
