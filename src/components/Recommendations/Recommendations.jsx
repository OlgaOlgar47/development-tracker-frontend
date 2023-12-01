import React from "react";
import "./Recommendations.css";
import resumeCreation from "../../images/resume-creation.svg";
import english from "../../images/english.svg";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({isSkillsEditor, userData}) {
  const coursesList = [
    { name: "Как составить резюме", image: resumeCreation, skills: ["HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "Vue.js",
    "Angular",
    "Типографика",
    "Композиция",
    "Генерация идей",
    "Tilda"] },
    { name: "Второй курс", image: resumeCreation, skills: ["HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "Vue.js",
    "Angular",
    "Типографика",
    "Композиция",
    "Генерация идей",
    "Tilda"] },
  ];

  const coursesListEditor = [
    { name: "Как составить резюме", image: english }
  ];

  function getRecommendedCourses(userData, coursesList) {
    const skillsCount = {};
  
    userData.forEach((skillData) => {
      const { name } = skillData;
  
      coursesList.forEach((course) => {
        if (course.skills && course.skills.includes(name)) {
          skillsCount[course.name] = (skillsCount[course.name] || 0) + 1;
        }
      });
    });
  
    const sortedCourses = Object.keys(skillsCount).sort(
      (a, b) => skillsCount[b] - skillsCount[a]
    );
  
    const topRecommendedCourses = sortedCourses.slice(0, 2).map((courseName) => {
      return coursesList.find((course) => course.name === courseName);
    });
    return topRecommendedCourses;
  }  
  

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
    const recommendedCourses = getRecommendedCourses(userData, coursesList);
    return (
        <div className="recommendations">
          <h3 className="recommendations__title">Полезные ресурсы</h3>
          {recommendedCourses.map((course, index) => (
            <CourseCard key={index} name={course.name} image={course.image} />
          ))}
        </div>
      );
      
  }
}
