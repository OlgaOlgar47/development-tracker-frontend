import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";

function App() {
  const [userData, setUserData] = useState({})
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});

  useEffect(() => {
      Promise.all([Api.getSkills(), Api.getCourses()])
        .then(([coursesData, skillsData]) => {
          setCoursesData(coursesData);
          setSkillsData(skillsData);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [skillsData]);

  function handleAddSkill(name) {
    Api.addSkill(name)
    .then((res) => {
       setUserData([res, ...userData])
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="page">
      <Header />
      <Main skillsData={skillsData} coursesData={coursesData} handleAddSkill={handleAddSkill}/>
    </div>
  );
}

export default App;
