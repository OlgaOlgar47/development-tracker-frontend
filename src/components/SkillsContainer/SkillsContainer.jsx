import { useEffect, useRef, useState } from "react";
import "./SkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";

export default function SkillsContainer({ subtitleName, skillsData }) {
    const containerRef = useRef(null);
    const [maxSkillsToShow, setMaxSkillsToShow] = useState(0);
  
    useEffect(() => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        
        const itemHeight =
          containerRef.current.querySelector(".skills-container__item")
            ?.clientHeight || 0;
        const maxItemsPerRow = Math.floor(containerHeight / itemHeight);
        console.log("maxItemsPerRow", maxItemsPerRow)
        const totalItems = skillsData.length;
        const maxItems = maxItemsPerRow * 3; // Три строки
        setMaxSkillsToShow(Math.min(totalItems, maxItems));
      }
    }, [skillsData]);
  
    let displayedSkills = skillsData.slice(0, maxSkillsToShow);
    let hiddenSkillsCount = skillsData.length - maxSkillsToShow;

    console.log("hiddenSkillsCount", hiddenSkillsCount)
    console.log("displayedSkills", displayedSkills)
    console.log("maxSkillsToShow", maxSkillsToShow)
    console.log("maxSkillsToShow", maxSkillsToShow)
    console.log("maxSkillsToShow", maxSkillsToShow)
   

  
    return (
      <section className="skills-container" ref={containerRef}>
        <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />
        <div className="skills-container__buttons">
          <button
            className="skills-container__sort-button"
            onClick={1}
          ></button>
          <button
            className="skills-container__showall-button"
            onClick={1}
          ></button>
        </div>
      </div>
        {skillsData && skillsData.length > 0 ? (
          <>
            <ul className="skills-container__list">
              {displayedSkills.map((skill, index) => (
                <li
                  key={index}
                  className="skills-container__item"
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
