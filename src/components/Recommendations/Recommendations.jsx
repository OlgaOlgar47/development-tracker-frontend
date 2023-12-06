import React from "react";
import "./Recommendations.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({ coursesData }) {
  let limitedCoursesData = [];

  if (Array.isArray(coursesData)) {
    limitedCoursesData = coursesData.slice(0, 2); // Выбираем первые два элемента
  } else {
    // Если coursesData не является массивом, выводим сообщение об ошибке или предпринимаем другие действия
    console.error("Ошибка: coursesData не является массивом");
    // Или предпримите другие действия, которые нужны в вашем случае
  }

  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Полезные ресурсы</h3>
      {limitedCoursesData.map((course, index) => (
        <CourseCard key={index} name={course.name} image={course.image} />
      ))}
    </div>
  );
}

