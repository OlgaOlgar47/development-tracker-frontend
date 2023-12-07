import { useState } from "react";
import "./SkillsContainer.css";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";
import { useLocation } from "react-router-dom";

export default function SkillsContainer({ skillsData, handleAddSkill }) {
  console.log('skillsData пришла в SkillsContainer: ', skillsData);
  const [selectedCards, setSelectedCards] = useState([]);
  const { pathname } = useLocation();

  const skills = skillsData ? skillsData : []; 


  const handleImageClick = (index) => {
    const selectedItem = skills[index];
    setSelectedCards([selectedItem]); // Выбор только одного элемента
  };
  
  

  function handleAdd() {
    let skillToAdd = [];
    if (selectedCards.length > 0) {
      skillToAdd = selectedCards.slice();
      setSelectedCards([]);
      handleAddSkill(skillToAdd);
    }
  }


  return (
    <section className="skills-container">
      <ul
        className={
          pathname === "/"
            ? "skills-container__list"
            : "skills-container__list skills-container__list_type_all"
        }
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`skills-container__item-small ${
              selectedCards.includes(skill) ? "selected" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            {skill.name}
          </li>
        ))}
      </ul>
      <ButtonsBackAdd
        handleAdd={handleAdd}
        disabledAdd={selectedCards.length === 0}
      />
    </section>
  );
}
