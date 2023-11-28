import React from 'react';
import './SkillsContainer.css';
import Subtitle from '../Subtitle/Subtitle';

export default function SkillsContainer({ subtitleName, skillsData }) {
//   const [skills, setSkills] = useState(skillsData);

  return (
    <section className="skills-container">
      <Subtitle subtitleName={subtitleName} />
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
