import { useState } from "react";
import "./SkillsContainer.css";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";
import InfoTooltip from "../InfoTooltip/InfoTooltip"

export default function SkillsContainer({ skillsData, handleAddSkill }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleImageClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((item) => item !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  function handleAdd() {
    handleAddSkill(selectedCards);
  }

  return (
    <section className="skills-container">
      <ul className="skills-container__list">
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
      <ButtonsBackAdd handleAdd={handleAdd} disabledAdd={selectedCards.length === 0} />
      <InfoTooltip />
    </section>
  );
}
