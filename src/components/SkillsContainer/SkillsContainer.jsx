import React from "react";
import './SkillsContainer.css';

export default function SkillsContainer({title, isRated, skills}) {
//  const [skills, setSkills] = useState([])

  return (
    <section className="skills-container">
        <h2 className="skills-container__tilte">{title}</h2>
        {skills ? (
        <ul className="skills-container__list">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={isRated ? "skills-container__item skills-container__item_rated" : "skills-container__item"}
            >{skill}</li>
          ))}
        </ul>
      ) : (<p className="skills-container__text">Ты пока не добавил ни одного навыка</p>)}
    </section>
  );
}