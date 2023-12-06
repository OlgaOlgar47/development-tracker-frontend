import React from "react";
import "./Recommendations.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({coursesData}) {
  console.log('coursesData in Recomendations: ', coursesData);

  // Преобразуем coursesData в массив, если оно не является массивом
  const dataArray = Array.isArray(coursesData) ? coursesData : Array.from(coursesData);


  const limitedCoursesData = dataArray.slice(0, 2); // Выбираем первые два элемента

  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Полезные ресурсы</h3>
      {limitedCoursesData.map((course, index) => (
        <CourseCard key={index} name={course.name} image={`http://localhost:8000${course.image}`} />
      ))}
    </div>
  );
}

