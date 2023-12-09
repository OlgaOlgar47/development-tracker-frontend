import { useState, useEffect } from "react";
import "./SkillsContainer.css";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";
import { useLocation } from "react-router-dom";
import Subtitle from "../Subtitle/Subtitle";

export default function SkillsContainer({
  skillsData,
  handleAddSkill,
  subtitleName,
  userData
}) {
  const [selectedCard, setSelectedCard] = useState(null);
  const { pathname } = useLocation();
  const [skills, setSkills] = useState([]);

  
  useEffect(() => {
    if (skillsData && Array.isArray(skillsData) && userData && Array.isArray(userData)) {
      const filteredSkillsData = skillsData.filter(skill => !userData.some(userSkill => userSkill.name === skill.name));
      setSkills(filteredSkillsData);
    }
  }, [skillsData, userData]);

  if (skillsData === undefined || !Array.isArray(skillsData)) {
    return <p>СкиллсДата не найдена или имеет неверный формат</p>;
  }


  const handleImageClick = (index) => {
    const selectedItem = skills[index];
    setSelectedCard(selectedItem); 
  };
  
  function handleAdd() {
    if (selectedCard) {
      handleAddSkill(selectedCard);
      setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== selectedCard)
    );
      setSelectedCard(null); 
    }
  }

  return (
    <section className="skills-container">
      <Subtitle subtitleName={subtitleName} />
      {skills && skills.length > 0 ? (
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
              selectedCard && selectedCard.name === skill.name
                ? "selected"
                : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    ) : (
      <p className="skills-container__text">Ты добавил все навыки из подборки</p>
    )}
    <ButtonsBackAdd
      handleAdd={handleAdd}
      disabledAdd={!selectedCard}
    />
    </section>
  );
}
