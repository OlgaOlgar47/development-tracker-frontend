import React from "react";
import "./Recommendations.css";
import resumeCreation from "../../images/resume-creation.svg";
import english from '../../images/english.svg';
import CourseCard from "../CourseCard/CourseCard";

export default function Recommendations() {
  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Полезные ресурсы</h3>
      <CourseCard name="Как составить резюме" image={resumeCreation} />
      <CourseCard name="Английский язык для продакт-менеджеров" image={english} />
    </div>
  );
}
