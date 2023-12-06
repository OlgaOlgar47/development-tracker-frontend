import { useState } from "react";
import "./SkillsContainer.css";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";
import { useLocation } from "react-router-dom";

export default function SkillsContainer({ skillsData, handleAddSkill }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const { pathname } = useLocation();

  const handleImageClick = (index) => {
    const selectedItem = skillsData[index];
    setSelectedCards((prevItems) => {
      if (prevItems.some((item) => item === selectedItem)) {
        // Убираем элемент из массива, если он уже был выбран
        return prevItems.filter((item) => item !== selectedItem);
      } else {
        // Добавляем элемент в массив, если он не был выбран
        return [...prevItems, selectedItem];
      }
    });
  };

  function handleAdd() {
    let skillsToAdd = [];
    if (selectedCards.length > 0) {
      skillsToAdd = selectedCards.slice();
      setSelectedCards([]); // Очищаем selectedCards
      console.log("skillsToAdd", skillsToAdd);
      handleAddSkill(skillsToAdd);
    }
  }
  console.log('skillsContainer говорит: ', skillsData);


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
