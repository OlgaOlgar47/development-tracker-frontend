import React from "react";
import "./Recommendations.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({ coursesData, isSkillsEditor }) {

  // Если coursesData не определен, не является массивом или пуст, отображаем сообщение
  if (!coursesData || !Array.isArray(coursesData) || coursesData.length === 0) {
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Нет данных о курсах</h3>
      </div>
    );
  }

  // Если мы в SkillsEditor, показываем только одну рекомендацию
  if (isSkillsEditor) {
    const singleCourse = coursesData.slice(0, 1); // Получаем только первый элемент
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Как развить</h3>
        <CourseCard key={0} name={singleCourse[0].name} image={`http://localhost:8000${singleCourse[0].image}`} />
      </div>
    );
  }

  // Если isSkillsEditor равно false, показываем первые два элемента coursesData
  const limitedCoursesData = coursesData.slice(0, 2);
  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Полезные ресурсы</h3>
      {limitedCoursesData.map((course, index) => (
        <CourseCard key={index} name={course.name} image={`http://localhost:8000${course.image}`} />
      ))}
    </div>
  );
}


