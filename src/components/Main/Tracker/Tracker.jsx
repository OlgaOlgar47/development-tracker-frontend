import React from "react";
import "./Tracker.css";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import SearchForm from "../../SearchForm/SearchForm";
import UserSkillsContainer from "../../UserSkillsContainer/UserSkillsContainer";
import Recommendations from "../../Recommendations/Recommendations";
// import { userDataConst } from "../../../utils/constants";

export default function Tracker({
  userDataToRender,
  serverError,
  userData,
  skillsData,
  handleAddSkill,
  handleDeleteSkill,
  toggleVisibility,
  handleInfoTooltip
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
            userDataToRender={userDataToRender}
            subtitleName="Поиск навыков"
            hasButton={true}
            skillsData={skillsData}
            handleAddSkill={handleAddSkill}
            serverError={serverError}
            toggleVisibility={toggleVisibility}
            handleInfoTooltip={handleInfoTooltip}
          />
          <UserSkillsContainer
            userDataToRender={userDataToRender}
            hasBlueButons={true}
            handleDeleteSkill={handleDeleteSkill}
            subtitleName="Твои навыки"
            userData={userData}
            serverError={false}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations
            title="Полезные ресурсы"
            // userData={userData}
            userDataToRender={userDataToRender}
            serverError={serverError}
          />
        </div>
      </div>
    </section>
  );
}
