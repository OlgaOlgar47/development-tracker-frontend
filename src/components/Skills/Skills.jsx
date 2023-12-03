import Paragraph from "../Paragraph/Paragraph";
import Recommendations from "../Recommendations/Recommendations";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import Title from "../Title/Title";
import "./Skills.css";
import UserSkillsContainer from "../UserSkillsContainer/UserSkillsContainer";
import { useParams } from "react-router-dom";

export default function Skills({ handleAddSkill, userData, collectionData }) {
  const { skills } = collectionData;

  const { name } = useParams();

   const matchingSkills = skills.filter((skill) => {
    return userData.some((userSkill) => userSkill.name === skill.name)
  }

);
  return (
    <section className="skills">
      {/* <Title text="Дизайнер"/> */}
      <Title text={name}/>
      <div className="skills__container">
        <div className="skills__items">
          <Paragraph text="Каждый день мы делаем покупки в интернете, заказываем доставку, читаем новости. UX/UI-дизайнеры делают так, чтобы всё это получалось легко и удобно." />
          <SkillsContainer handleAddSkill={handleAddSkill}
            subtitleName="Навыки дизайнера интерфейсов"
            skillsData={skills}
          />
           <UserSkillsContainer
            subtitleName="В твоих навыках"
            // hasBlueButons убрать кнопки сортировки
            hasBlueButons={false}
            userDataToRender={matchingSkills}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations isSkillsEditor={false} userData={userData} />
        </div>
      </div>
    </section>
  );
}
