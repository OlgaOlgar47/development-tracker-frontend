import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./UserSkillsContainer.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonsDeleteEdit from "../Buttons/ButtonsDeleteEdit";
import iconLink from "../../images/link.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Skill = {
  id: number;
  name: string;
  rate: number;
  notes?: string;
};

type Props = {
  isSkills: boolean;
  hasBlueButons: boolean;
  subtitleName: string;
  userData: Skill[];
  handleDeleteSkill: (id: number | null) => void;
  serverError: boolean;
};

const UserSkillsContainer: React.FC<Props> = ({
  isSkills,
  hasBlueButons,
  subtitleName,
  userData,
  handleDeleteSkill,
  serverError,
}: Props) => {
  const [sortedSkillsData, setSortedSkillsData] = useState<Skill[]>([]);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);
  const navigate = useNavigate();
  const skillItemRef = useRef<HTMLLIElement>(null);
  const skillItemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    // Инициализация массива рефов
    skillItemRefs.current = userData.map(() => null);
  }, [userData]);

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  function handleEdit() {
    if (selectedSkill !== null) {
      const skillId = selectedSkill;
      navigate(`/skill-editor/${skillId}`);
    }
  }

  const handleSkillClick = (id: number) => {
    if (selectedSkill === id) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(id);
    }
  };

  useEffect(() => {
    setSortedSkillsData([...userData]);
  }, [userData]);

  const visibleSkills = showAllSkills
    ? sortedSkillsData
    : sortedSkillsData.slice(0, 15);

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

  const generateGradient = (
    rate: number,
    colorStart: string,
    colorEnd: string
  ) => {
    if (rate) {
      return `linear-gradient(90deg, ${colorStart} ${rate}%, ${colorEnd} ${
        rate + 0.01
      }%)`;
    }
    return "";
  };

  function handleDelete() {
    if (selectedSkill !== null) {
      handleDeleteSkill(selectedSkill);
    }
  }

  if (serverError) {
    return (
      <p className="skills-container__server-error">
        «Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз»"
      </p>
    );
  }

  // const handleFocus = (skill: Skill) => {
  //   const refButton = skillItemRef.current;
  //   if (refButton) {
  //     refButton.style.background = generateGradient(
  //       skill.rate,
  //       "#87CC9E",
  //       "#F7FFFA"
  //     );
  //   }
  // };

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, skill: Skill) => {
    const refButton = event.currentTarget;
    refButton.style.background = generateGradient(
      skill.rate,
      "#87CC9E",
      "#F7FFFA"
    );
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, skill: Skill) => {
    const refButton = event.currentTarget;
    refButton.style.background = generateGradient(
      skill.rate,
      "#c2e5ce",
      "#c2e5ce00"
    );
  };

  const allRatesAreZero = () => {
    return userData.every((item) => item.rate === 0);
  };
  const allZeroRates = allRatesAreZero();

  const shouldAddGreyClass = visibleSkills.length === sortedSkillsData.length;
  console.log("shouldAddGreyClass: ", shouldAddGreyClass);

  return (
    <section className="skills-container">
      <div className="skills-container__header">
        <Subtitle subtitleName={subtitleName} />
        {hasBlueButons && userData.length > 0 ? (
          <div className="skills-container__buttons">
            <button className="skills-container__button" onClick={sortSkills}>
              <p
                className={
                  allZeroRates
                    ? "skills-container__button-text skills-container__button-text_grey"
                    : "skills-container__button-text"
                }
              >
                Сортировка
              </p>
              <div
                className={
                  allZeroRates
                    ? "skills-container__sort-icon-grey"
                    : "skills-container__sort-icon"
                }
              ></div>
            </button>
            <button className="skills-container__button" onClick={showAll}>
              <p
                className={
                  showAllSkills
                    ? "skills-container__button-text"
                    : shouldAddGreyClass
                    ? "skills-container__button-text skills-container__button-text_grey"
                    : "skills-container__button-text"
                }
              >
                {showAllSkills ? "Свернуть" : "Смотреть все"}
              </p>
              <div
                className={
                  showAllSkills
                    ? "skills-container__arrow-icon-up"
                    : shouldAddGreyClass
                    ? "skills-container__arrow-icon skills-container__arrow-icon_grey"
                    : "skills-container__arrow-icon"
                }
              ></div>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {userData && userData.length > 0 ? (
        <>
          <TransitionGroup className="skills-container__list">
            {visibleSkills.map((skill, index) => (
              <CSSTransition key={skill.id} timeout={500} classNames="fade">
                <li
                  ref={skillItemRef}
                  className={`skills-container__item ${
                    selectedSkill === skill.id ? "selected" : ""
                  }`}
                  onClick={() => handleSkillClick(skill.id)}
                  style={{
                    background: generateGradient(
                      skill.rate,
                      "#c2e5ce",
                      "#c2e5ce00"
                    ),
                  }}
                  onMouseEnter={(event) => handleMouseEnter(event, skill)}
                  onMouseLeave={(event) => handleMouseLeave(event, skill)}
                  // onFocus={() => handleFocus(skill)}
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
          {isSkills
            ? "Ты пока не добавил ни одного навыка из подборки."
            : "Ты пока не добавил ни одного навыка."}
        </p>
      )}
      <ButtonsDeleteEdit
        disabledDelete={selectedSkill === null}
        disabledEdit={selectedSkill === null}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  );
};

export default UserSkillsContainer;
