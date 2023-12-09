import React from "react";
import "./Recommendations.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({ coursesData, isSkillsEditor }) {
  console.log("coursesData: ", coursesData);

  if (Array.isArray(coursesData) && coursesData.length === 0) {
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Полезные ресурсы</h3>
        <p className="recommendations-text">
          Добавь хотя&nbsp;бы один навык, и&nbsp;мы&nbsp;подскажем тебе
          материалы для изучения.
        </p>
      </div>
    );
  }

  if (
    !coursesData ||
    (typeof coursesData === "object" && Object.keys(coursesData).length === 0)
  ) {
    return null;
  }

  if (isSkillsEditor && !Array.isArray(coursesData)) {
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Как развить</h3>
        <CourseCard key={0} name={coursesData.name} image={coursesData.image} />
      </div>
    );
  }

  const limitedcoursesData = Array.isArray(coursesData)
    ? coursesData.slice(0, 2)
    : [];

  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Полезные ресурсы</h3>
      {limitedcoursesData.map((course, index) => (
        <CourseCard key={index} name={course.name} image={course.image} />
      ))}
    </div>
  );
}
