import React from 'react';
import './SkillsContainer.css';

export default function SkillsContainer({ title, skillsData }) {
//   const [skills, setSkills] = useState(skillsData);

  return (
    <section className="skills-container">
      <h2 className="skills-container__title">{title}</h2>
      {skillsData ? (
        <ul className="skills-container__list">
          {skillsData.map((skill, index) => (
            <li
              key={index}
              className={skill.percentage ? "skills-container__item skills-container__item_rated" : "skills-container__item"}
              style={{
                background: skill.percentage ? `linear-gradient(90deg, #c2e5ce ${skill.percentage}%, rgba(194, 229, 206, 0) ${skill.percentage + 0.01}%)` : ''
              }}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="skills-container__text">Ты пока не добавил ни одного навыка</p>
      )}
    </section>
  );
}
