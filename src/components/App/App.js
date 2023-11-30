import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as Api from "../../utils/api";

function App() {
  const [skillsData, setSkillsData] = useState([]);
  const [coursesData, setCoursesData] = useState({});

  useEffect(() => {
      Promise.all([Api.getUserData(), Api.getCourses()])
        .then(([coursesData, skillsData]) => {
          setCoursesData(coursesData);
          setSkillsData(skillsData);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [skillsData]);

  return (
    <div className="page">
      <Header />
      <Main skillsData={skillsData} coursesData={coursesData}/>
    </div>
  );
}

export default App;
