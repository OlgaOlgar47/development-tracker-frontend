import { useEffect, useRef, useState } from "react";
import "./SkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";

export default function SkillsContainer({
  subtitleName,
  skillsData,
  isSkills,
}) {
  const containerRef = useRef(null);
  const [maxSkillsToShow, setMaxSkillsToShow] = useState(0);
  const [sortedSkillsData, setSortedSkillsData] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const itemHeight =
        containerRef.current.querySelector(".skills-container__item")
          ?.clientHeight || 0;
      const maxItemsPerRow = Math.floor(containerHeight / itemHeight);

      const totalItems = skillsData.length;
      const maxItems = maxItemsPerRow * 2; // Три строки должно быть
      setMaxSkillsToShow(Math.min(totalItems, maxItems));
      console.log("maxItems", maxItems);
    }
  }, [skillsData]);

  useEffect(() => {
    setSortedSkillsData([...skillsData]);
  }, [skillsData]);

  let displayedSkills = sortedSkillsData.slice(0, maxSkillsToShow);
  let hiddenSkillsCount = skillsData.length - maxSkillsToShow;

  function sortSkillsByPercentage() {
    const sortedSkills = [...skillsData].sort((a, b) => a.percentage - b.percentage);
    setSortedSkillsData(sortedSkills);
  }
  function showAll() {}

  return (
    <section className="skills-container" ref={containerRef}>
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />
        {!isSkills && (
          <div className="skills-container__buttons">
            <button className="skills-container__button" onClick={sortSkillsByPercentage}>
              <p className="skills-container__button-text">Сортировка</p>
              <div className="skills-container__sort-icon"></div>
            </button>
            <button
              className="skills-container__button"
              onClick={showAll}
            >
              <p className="skills-container__button-text">Смотреть все</p>
              <div className="skills-container__arrow-icon"></div>
            </button>
          </div>
        )}
      </div>
      {skillsData && skillsData.length > 0 ? (
        <>
          <ul className="skills-container__list">
            {displayedSkills.map((skill, index) => (
              <li
                key={index}
                className={
                  isSkills
                    ? "skills-container__item-small"
                    : "skills-container__item"
                }
                style={{
                  background: skill.percentage
                    ? `linear-gradient(90deg, #c2e5ce ${
                        skill.percentage
                      }%, rgba(194, 229, 206, 0) ${skill.percentage + 0.01}%)`
                    : "",
                }}
              >
                {skill.name}
              </li>
            ))}
          </ul>
          {hiddenSkillsCount > 0 && (
            <span className="skills-container__item-count">
              + {hiddenSkillsCount}{" "}
              {hiddenSkillsCount === 1
                ? "навык"
                : hiddenSkillsCount > 1 && hiddenSkillsCount < 5
                ? "навыка"
                : "навыков"}
            </span>
          )}
        </>
      ) : (
        <p className="skills-container__text">
          Ты пока не добавил ни одного навыка
        </p>
      )}
    </section>
  );
}
