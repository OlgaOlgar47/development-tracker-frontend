import React from "react";
import "./Recommendations.css";
import resumeCreation from "../../images/resume-creation.svg";
import english from "../../images/english.svg";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({isSkillsEditor}) {
  const coursesList = [
    { name: "Как составить резюме", image: resumeCreation },
    { name: "Как составить резюме", image: resumeCreation },
  ];

  const coursesListEditor = [
    { name: "Как составить резюме", image: english }
  ];

  if (isSkillsEditor) {
    return (
        <div className="recommendations">
          <h3 className="recommendations__title">Как развить</h3>
          {coursesListEditor.map((course, index) => (
            <CourseCard key={index} name={course.name} image={course.image} />
          ))}
        </div>
      );
      
  } else {
    return (
        <div className="recommendations">
          <h3 className="recommendations__title">Полезные ресурсы</h3>
          {coursesList.map((course, index) => (
            <CourseCard key={index} name={course.name} image={course.image} />
          ))}
        </div>
      );
      
  }
}
