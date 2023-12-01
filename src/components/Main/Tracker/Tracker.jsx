import React from "react";
import "./Tracker.css";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import SearchForm from "../../SearchForm/SearchForm";
import UserSkillsContainer from "../../UserSkillsContainer/UserSkillsContainer";
import Recommendations from "../../Recommendations/Recommendations";
import { userDataConst } from "../../../utils/constants";

export default function Tracker({
  userData,
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
            userData={userData}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations title="Полезные ресурсы" userData={[
              { id: 0, name: "HTML", rate: 0, notes: "kakaka" },
              { id: 1, name: "HTML", rate: 0, notes: "kakaka" },
              { id: 2, name: "CSS", rate: 0 },
              { id: 3, name: "JavaScript", rate: 0 },
              { id: 13, name: "Исследования", rate: 80 },
              { id: 14, name: "Гайдлайны iOS", rate: 100 },
              { id: 15, name: "Вайрфреймы", rate: 20 },
              { id: 16, name: "Анализ ЦА", rate: 20 },
              { id: 17, name: "Гипотезы", rate: 60 },
              { id: 18, name: "dobe Photoshop", rate: 80 },
            ]} />
        </div>
      </div>
    </section>
  );
}
