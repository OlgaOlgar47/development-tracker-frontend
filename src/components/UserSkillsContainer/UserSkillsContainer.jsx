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
  serverError,
}) {
  const [sortedSkillsData, setSortedSkillsData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [selectedSkill, setSelectedSkills] = useState([]);

  const navigate = useNavigate();

  function handleEdit() {
    if (selectedSkill.length === 1) {
      const skillId = selectedSkill[0];
      navigate(`/skill-editor/${skillId}`);
    }
  }

  const handleSkillClick = (id) => {
    if (selectedSkill.includes(id)) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills([id]);
    }
  };

  useEffect(() => {
    if (Array.isArray(userData)) {
      setSortedSkillsData([...userData]);
    }
  }, [userData]);
  

  function sortSkills() {
    let sortedSkills;
    if (isSorted) {
      sortedSkills = [...userData].sort((a, b) => a.rate - b.rate);
    } else {
      sortedSkills = [...userData].sort((a, b) => b.rate - a.rate);
    }
    setIsSorted(!isSorted);
    setSortedSkillsData(sortedSkills);
  }

  const showAll = () => {
    const skillsContainer = document.querySelector(".skills-container__list");
    skillsContainer.classList.toggle("skills-container__list_type_all");
  };

  const generateGradient = (rate, colorStart, colorEnd) => {
    if (rate) {
      return `linear-gradient(90deg, ${colorStart} ${rate}%, ${colorEnd} ${
        rate + 0.01
      }%)`;
    }
    return "";
  };

  function handleDelete() {
    const selectedSkillNumber = parseInt(selectedSkill, 10);
    handleDeleteSkill(selectedSkillNumber); // Передача числа в функцию обработки удаления
  }

  if (!userData || !userData.length ) {
    return (
      <p className="skills-container__server-error">
        {!userData ? "Данные не были получены с сервера" : "Нет данных UserData для отображения"}
      </p>
    );
  }

  return (
    <section className="skills-container">
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />
        {(hasBlueButons && userData.length > 0) || userDataConst ? (
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
        ) : (
          ""
        )}
      </div>
      {(userData && userData.length > 0) || userDataConst ? (
        <>
          <ul className="skills-container__list">
            {sortedSkillsData.map((skill, index) => (
              <li
                key={skill.id}
                className={`skills-container__item ${
                  selectedSkill.includes(skill.id) ? "selected" : ""
                }`}
                onClick={() => handleSkillClick(skill.id)}
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
