import React from "react";
import "./Tracker.css";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import SearchForm from "../../SearchForm/SearchForm";
import SkillsContainer from "../../UserSkillsContainer/UserSkillsContainer";
import Recommendations from "../../Recommendations/Recommendations";
import ButtonsDeleteEdit from "../../Buttons/ButtonsDeleteEdit";

export default function Tracker({skillsData, handleAddSkill}) {
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
          <SearchForm subtitleName="Поиск навыков" hasButton={true} skillsData={skillsData} handleAddSkill={handleAddSkill}/>
          <SkillsContainer
            subtitleName="Твои навыки"
            skillsData={[
              { name: "HTML", percentage: 0 },
              { name: "CSS", percentage: 0 },
              { name: "JavaScript", percentage: 0 },
              { name: "Python", percentage: 0 },
              { name: "React", percentage: 0 },
              { name: "Node.js", percentage: 0 },
              { name: "SQL", percentage: 0 },
              { name: "Vue.js", percentage: 0 },
              { name: "Angular", percentage: 0 },
              { name: "Композиция и сетки", percentage: 80 },
              { name: "UX-копирайтинг", percentage: 20 },
              { name: "Анимация", percentage: 40 },
              { name: "Исследования", percentage: 80 },
              { name: "Гайдлайны iOS", percentage: 100 },
              { name: "Вайрфреймы", percentage: 20 },
              { name: "Анализ ЦА", percentage: 20 },
              { name: "Гипотезы", percentage: 60 },
              { name: "dobe Photoshop", percentage: 80 },
            ]}
          />
          <ButtonsDeleteEdit disabledDelete={true} disabledEdit={true} />
        </div>
        <div className="tracker__grid-item">
          <Recommendations title="Полезные ресурсы" />
        </div>
      </div>
    </section>
  );
}
