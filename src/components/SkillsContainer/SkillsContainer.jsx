import { useState } from "react";
import "./SkillsContainer.css";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";
import { useLocation } from "react-router-dom";

export default function SkillsContainer({ skillsData, handleAddSkill }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const { pathname } = useLocation();

  const handleImageClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((item) => item !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  function handleAdd() {
    console.log(selectedCards);
    handleAddSkill(selectedCards);
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
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className={`skills-container__item-small ${
              selectedCards.includes(index) ? "selected" : ""
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
