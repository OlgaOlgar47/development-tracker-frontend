import React from "react";
import "./Tracker.css";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import SearchForm from "../../SearchForm/SearchForm";
import SkillsContainer from "../../SkillsContainer/SkillsContainer";
import Recommendations from "../../Recommendations/Recommendations";

export default function Tracker() {
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
          <SearchForm subtitleName="Поиск навыков" hasButton={true} />
          <SkillsContainer
            subtitleName="Твои навыки"
            skillsData={[
              { name: "HTML" },
              { name: "CSS" },
              { name: "JavaScript" },
              { name: "Python" },
              { name: "React" },
              { name: "Node.js" },
              { name: "SQL" },
              { name: "Vue.js" },
              { name: "Angular" },
              { name: "Композиция и сетки", percentage: 60 },
              { name: "UX-копирайтинг", percentage: 30 },
              { name: "Анимация", percentage: 80 },
              { name: "Исследования", percentage: 60 },
              { name: "Гайдлайны iOS", percentage: 80 },
              { name: "Вайрфреймы", percentage: 30 },
              { name: "Анализ ЦА", percentage: 30 },
              { name: "Гипотезы", percentage: 60 },
              { name: "dobe Photoshop", percentage: 80 },
            ]}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations />
        </div>
      </div>
    </section>
  );
}
