import { useState, useEffect } from "react";
import "./UserSkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";

export default function SkillsContainer({ subtitleName, skillsData }) {
  const [sortedSkillsData, setSortedSkillsData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

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

  return (
    <section className="skills-container">
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />

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
      </div>
      {skillsData && skillsData.length > 0 ? (
        <>
          <ul className="skills-container__list">
            {sortedSkillsData.map((skill, index) => (
              <li
                key={index}
                className="skills-container__item"
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
    </section>
  );
}
