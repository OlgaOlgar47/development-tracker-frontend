import React from "react";
import "./Tracker.css";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import SearchForm from "../../SearchForm/SearchForm";
import UserSkillsContainer from "../../UserSkillsContainer/UserSkillsContainer";
import Recommendations from "../../Recommendations/Recommendations";

export default function Tracker({
  skillsData,
  handleAddSkill,
  handleDeleteSkill,
}) {
  return (
    <section className="tracker">
      <Title text="Трекер развития" />
      <div className="tracker__grid-container">
        <div className="tracker__grid-item">
          <Paragraph
            text="Здесь ты&nbsp;можешь добавлять навыки, которые ты&nbsp;хочешь получить или
      которыми уже обладаешь. А&nbsp;мы&nbsp;подскажем полезные материалы для
      изучения."
          />
          <SearchForm
            subtitleName="Поиск навыков"
            hasButton={true}
            skillsData={skillsData}
            handleAddSkill={handleAddSkill}
          />
          <UserSkillsContainer
            hasBlueButons={true}
            handleDeleteSkill={handleDeleteSkill}
            subtitleName="Твои навыки"
            skillsData={[
              { id: 1, name: "HTML", percentage: 0, rate: 1, notes: "kakaka" },
              { id: 2, name: "CSS", percentage: 0 },
              { id: 3, name: "JavaScript", percentage: 0 },
              { id: 4, name: "Python", percentage: 0 },
              { id: 5, name: "React", percentage: 0 },
              { id: 6, name: "Node.js", percentage: 0 },
              { id: 7, name: "SQL", percentage: 0 },
              { id: 8, name: "Vue.js", percentage: 0 },
              { id: 9, name: "Angular", percentage: 0 },
              { id: 10, name: "Композиция и сетки", percentage: 80 },
              { id: 11, name: "UX-копирайтинг", percentage: 20 },
              { id: 12, name: "Анимация", percentage: 40 },
              { id: 13, name: "Исследования", percentage: 80 },
              { id: 14, name: "Гайдлайны iOS", percentage: 100 },
              { id: 15, name: "Вайрфреймы", percentage: 20 },
              { id: 16, name: "Анализ ЦА", percentage: 20 },
              { id: 17, name: "Гипотезы", percentage: 60 },
              { id: 18, name: "dobe Photoshop", percentage: 80 },
            ]}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations title="Полезные ресурсы" />
        </div>
      </div>
    </section>
  );
}
