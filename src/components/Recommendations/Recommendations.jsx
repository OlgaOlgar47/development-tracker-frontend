import React from "react";
import "./Recommendations.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({ coursesData, isSkillsEditor }) {

  if (!coursesData) {
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Отсутствуют данные о курсах</h3>
      </div>
    );
  }

  // Если мы в SkillsEditor и приходит объект, а не массив
  if (isSkillsEditor && !Array.isArray(coursesData)) {
    console.log('courseForSkillEditor is SkillEditor: ', coursesData);

    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Как развить</h3>
        <CourseCard key={0} name={coursesData.name} image={coursesData.image} />
      </div>
    );
  }
  
  // Если не находимся в SkillsEditor или приходит массив (по умолчанию)
  const limitedCoursesData = Array.isArray(coursesData) ? coursesData.slice(0, 2) : [];
  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Полезные ресурсы</h3>
      {limitedCoursesData.map((course, index) => (
        <CourseCard key={index} name={course.name} image={course.image} />
      ))}
    </div>
  );
}
