import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserSkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonsDeleteEdit from "../../components/Buttons/ButtonsDeleteEdit";
import iconLink from "../../images/link.svg";
import { userDataConst } from "../../utils/constants";

export default function UserSkillsContainer({
  hasBlueButons,
  subtitleName,
  userData,
  handleDeleteSkill,
  serverError
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
    setSortedSkillsData(Array.isArray(userData) ? [...userData] : [...userDataConst]);
  }, [userData]);
  

  function sortSkills() {
    let sortedSkills;
    if (isSorted) {
      sortedSkills = [...userData].sort(
        (a, b) => a.rate - b.rate
      );
    } else {
      sortedSkills = [...userData].sort(
        (a, b) => b.rate - a.rate
      );
    }
    setIsSorted(!isSorted);
    setSortedSkillsData(sortedSkills);
  }
  function showAll() {}

  const generateGradient = (rate, colorStart, colorEnd) => {
    if (rate) {
      return `linear-gradient(90deg, ${colorStart} ${rate}%, ${colorEnd} ${
        rate + 0.01
      }%)`;
    }
    return "";
  };

  function handleDelete() {
    handleDeleteSkill(selectedSkill);
  }


  
  if (serverError) {
    return (
      <p className="skills-container__server-error">
        «Во время запроса произошла ошибка. Возможно, проблема с соединением
        или сервер недоступен. Подождите немного и попробуйте ещё раз»"
      </p>
    );
  }

  return (
    <section className="skills-container">
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />
        {((hasBlueButons && (userData.length > 0)) || userDataConst)? (
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
        ) : ("")}
      </div>
      {((userData && userData.length > 0) || userDataConst) ? (
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
                    skill.rate,
                    "#c2e5ce",
                    "#c2e5ce00"
                  ),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = generateGradient(
                    skill.rate,
                    "#87CC9E",
                    "#F7FFFA"
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = generateGradient(
                    skill.rate,
                    "#c2e5ce",
                    "#c2e5ce00"
                  );
                }}
              >
                {skill.name}
                {skill.notes && (
                  <img
                    src={iconLink}
                    alt="иконка линк"
                    className="skills-container__icon-link"
                  />
                )}
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
