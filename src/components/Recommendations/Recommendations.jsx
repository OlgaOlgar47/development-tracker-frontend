import React from "react";
import "./Recommendations.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations({ isSkillsEditor, userData, coursesData }) {

  function getRecommendedCourses(userData, coursesList) {
    const skillsCount = {};

    if (Array.isArray(userData)) {
      userData.forEach((skillData) => {
        const { name } = skillData;

        coursesData.forEach((course) => {
          if (course.skills && course.skills.includes(name)) {
            skillsCount[course.name] = (skillsCount[course.name] || 0) + 1;
          }
        });
      });
    } else {
      console.error('userData is not an array.');
      return []; // Возвращаем пустой массив или обработку ошибки
    }

    const sortedCourses = Object.keys(skillsCount).sort(
      (a, b) => skillsCount[b] - skillsCount[a]
    );

    const topRecommendedCourses = sortedCourses.slice(0, 2).map((courseName) => {
      return coursesList.find((course) => course.name === courseName);
    });
    return topRecommendedCourses;
  }

  if (!userData || !Array.isArray(userData)) {
    // Обработка ситуации, когда userData не определена или не является массивом
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Полезные ресурсы</h3>
        <p>Данные недоступны или отсутствуют</p>
      </div>
    );
  } else if (isSkillsEditor) {
    const recommendedCourses = getRecommendedCourses(userData, coursesData);
    const firstRecommendedCourse = [recommendedCourses[0]]; // Без явной проверки на длину массива
  
    return (
      <div className="recommendations">
        <h3 className="recommendations__title">Как развить</h3>
        {firstRecommendedCourse.map((course, index) => (
          <CourseCard key={index} name={course.name} image={course.image} />
        ))}
      </div>
    );
  } else {
    // Ваш код для рекомендаций на основе userData и coursesList
    const recommendedCourses = getRecommendedCourses(userData, coursesData);
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

