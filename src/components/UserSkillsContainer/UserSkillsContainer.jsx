import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./UserSkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonsDeleteEdit from "../../components/Buttons/ButtonsDeleteEdit";

export default function UserSkillsContainer({
  hasBlueButons,
  subtitleName,
  skillsData,
  handleDeleteSkill,
}) {
  const [sortedSkillsData, setSortedSkillsData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [selectedSkill, setSelectedSkills] = useState([]);

  const navigate = useNavigate();

  function handleEdit() {
    if (selectedSkill.length === 1) {
      const skillId = selectedSkill[0]; // Предположим, что selectedSkill содержит индекс выбранного навыка
      navigate(`/skill-editor/${skillId}`); // Переход на страницу редактирования с id выбранного навыка
    }
  }

  const handleSkillClick = (index) => {
    if (selectedSkill.includes(index)) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills([index]);
    }
  };
  

  useEffect(() => {
    setSortedSkillsData([...skillsData]);
  }, [skillsData]);

  function sortSkills() {
    let sortedSkills;
    if (isSorted) {
      sortedSkills = [...skillsData].sort(
        (a, b) => a.percentage - b.percentage
      );
    } else {
      sortedSkills = [...skillsData].sort(
        (a, b) => b.percentage - a.percentage
      );
    }
    setIsSorted(!isSorted);
    setSortedSkillsData(sortedSkills);
  }
  function showAll() {}

  const generateGradient = (percentage, colorStart, colorEnd) => {
    if (percentage) {
      return `linear-gradient(90deg, ${colorStart} ${percentage}%, ${colorEnd} ${
        percentage + 0.01
      }%)`;
    }
    return "";
  };

  function handleDelete() {
    handleDeleteSkill(selectedSkill);
  }

  return (
    <section className="skills-container">
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />

        {hasBlueButons && (
          <div className="skills-container__buttons">
            <button className="skills-container__button" onClick={sortSkills}>
              <p className="skills-container__button-text">Сортировка</p>
              <div className="skills-container__sort-icon"></div>
            </button>
            <button className="skills-container__button" onClick={showAll}>
              <p className="skills-container__button-text">Смотреть все</p>
              <div className="skills-container__arrow-icon"></div>
            </button>
          </div>
        )}
      </div>
      {skillsData && skillsData.length > 0 ? (
        <>
          <ul className="skills-container__list">
            {sortedSkillsData.map((skill, index) => (
              <li
                key={index}
                className={`skills-container__item ${
                  selectedSkill.includes(index) ? "selected" : ""
                }`}
                onClick={() => handleSkillClick(index)}
                style={{
                  background: generateGradient(
                    skill.percentage,
                    "#c2e5ce",
                    "#c2e5ce00"
                  ),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = generateGradient(
                    skill.percentage,
                    "#87CC9E",
                    "#F7FFFA"
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = generateGradient(
                    skill.percentage,
                    "#c2e5ce",
                    "#c2e5ce00"
                  );
                }}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="skills-container__text">
          Ты пока не добавил ни одного навыка
        </p>
      )}
      <ButtonsDeleteEdit
        disabledDelete={selectedSkill.length === 0}
        disabledEdit={selectedSkill.length === 0}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  );
}