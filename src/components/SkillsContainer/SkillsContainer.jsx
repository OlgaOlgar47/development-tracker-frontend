import { useState, useEffect } from "react";
import "./SkillsContainer.css";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";

export default function SkillsContainer({ skillsData, handleAddSkill }) {
  const [sortedSkillsData, setSortedSkillsData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleImageClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((item) => item !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  useEffect(() => {
    setSortedSkillsData([...skillsData]);
  }, [skillsData]);

  function handleAdd() {
    handleAddSkill(selectedCards);
  }

  return (
    <section className="skills-container">
      <ul className="skills-container__list">
        {sortedSkillsData.map((skill, index) => (
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
    </section>
  );
}
