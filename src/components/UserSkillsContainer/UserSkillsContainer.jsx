import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./UserSkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonsDeleteEdit from "../../components/Buttons/ButtonsDeleteEdit";
import iconLink from "../../images/link.svg";
import { userDataConst } from "../../utils/constants";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  const [showAllSkills, setShowAllSkills] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const skillItemRef = useRef(null);

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

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
    setSortedSkillsData([...userData]);
  }, [userData]);
  

  const visibleSkills = showAllSkills
    ? sortedSkillsData
    : sortedSkillsData.slice(0, 15); // покажем только 15 навыков

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
    toggleShowAllSkills();
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
    handleDeleteSkill(selectedSkillNumber);
  }

  if (serverError) {
    return (
      <p className="skills-container__server-error">
        «Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз»"
      </p>
    );
  }

  const handleFocus = (skill) => {
    const refButton = skillItemRef.current;
    if (refButton) {
      refButton.style.background = generateGradient(
        skill.rate,
        "#87CC9E",
        "#F7FFFA"
      );
    }
  };

  return (
    <section className="skills-container">
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />
        {(hasBlueButons && userData.length > 0) || userDataConst ? (
          <div
            className={
              pathname === "/"
                ? "skills-container__buttons"
                : "skills-container__buttons_type_none"
            }
          >
            <button className="skills-container__button" onClick={sortSkills}>
              <p className="skills-container__button-text">Сортировка</p>
              <div className="skills-container__sort-icon"></div>
            </button>
            <button className="skills-container__button" onClick={showAll}>
              <p className="skills-container__button-text">
                {showAllSkills ? "Свернуть" : "Смотреть все"}
              </p>
              <div
                className={
                  showAllSkills
                    ? "skills-container__arrow-icon-up"
                    : "skills-container__arrow-icon"
                }
              ></div>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {(userData && userData.length > 0) || userDataConst ? (
        <>
          <TransitionGroup className="skills-container__list">
            {visibleSkills.map((skill) => (
              <CSSTransition key={skill.id} timeout={500} classNames="fade">
                <li
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
                  onFocus={handleFocus(skill)} // Добавляем обработчик фокуса на элементе
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
              </CSSTransition>
            ))}
          </TransitionGroup>
          {!showAllSkills && sortedSkillsData.length > 15 && (
            <button
              type="button"
              className="skills-container__item-count"
              onClick={showAll}
            >
              + {sortedSkillsData.length - 15}{" "}
              {sortedSkillsData.length - 15 === 1
                ? "навык"
                : sortedSkillsData.length - 15 > 1 &&
                  sortedSkillsData.length - 15 < 5
                ? "навыка"
                : "навыков"}
            </button>
          )}
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
