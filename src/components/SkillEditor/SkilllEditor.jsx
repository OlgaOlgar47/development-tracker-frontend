import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SkillEditor.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import RateButton from "./RateButton/RateButton";
import Recommendations from "../Recommendations/Recommendations";
import ButtonsBackSaveDel from "../Buttons/ButtonsBackSaveDel";
import TextField from "@mui/material/TextField";
// import { userDataConst } from "../../utils/constants";

export default function SkillEditor({
  courseForSkillEditor,
  coursesData,
  handleEditSkill,
  handleDeleteSkill,
  userData,
}) {
  const { skillId } = useParams();
  const [skillInfo, setSkillInfo] = useState({});
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [notes, setNotes] = useState(skillInfo.notes || "");

  useEffect(() => {
    setSelectedPercentage(skillInfo.rate);
    setNotes(skillInfo.notes);
  }, [skillInfo.rate, skillInfo.notes]);

  useEffect(() => {
    setSkillInfo((prevSkillInfo) => ({
      ...prevSkillInfo,
      name: skillInfo.name,
      rate: skillInfo.rate,
      notes: skillInfo.notes,
    }));
  }, [skillInfo.name, skillInfo.rate, skillInfo.notes]);

  const handleRateButtonClick = (rate) => {
    if (rate === 20 && selectedPercentage === rate) {
      setSelectedPercentage(0);
      setSkillInfo((prevSkillInfo) => ({
        ...prevSkillInfo,
        rate: 0,
      }));
    } else {
      setSelectedPercentage(rate);
      setSkillInfo((prevSkillInfo) => ({
        ...prevSkillInfo,
        rate: rate,
      }));
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setNotes(newValue);
    setSkillInfo((prevSkillInfo) => ({
      ...prevSkillInfo,
      notes: newValue,
    }));
  };

  function handleSaveSkill() {
    handleEditSkill(skillInfo);
    console.log("skillInfo: ", skillInfo);
  }

  function handleDelete() {
    console.log("skillInfo for Delete: ", skillInfo);
    handleDeleteSkill(skillInfo.id);
  }

  useEffect(() => {
    const id = parseInt(skillId, 10);
    const foundSkill = userData.find((skill) => skill.id === id);
    setSkillInfo(foundSkill);
  }, [skillId, userData]);

  const handleNameChange = (event) => {
    if (skillInfo.editable) {
      const newName = event.target.value.toString();
      setSkillInfo((prevSkillInfo) => ({
        ...prevSkillInfo,
        name: newName,
      }));
    }
  };

  // if (!skillInfo) {
  //   return <div>Loading...</div>; // Отобразить загрузку, пока данные не загружены
  // }

  // для кнопки 5
  useEffect(() => {
    const buttonFive = document.querySelector(".button-five");
    const buttonFour = document.querySelector(".button-four");
    const buttonThree = document.querySelector(".button-three");
    const buttonTwo = document.querySelector(".button-two");
    const buttonOne = document.querySelector(".button-one");

    const handleHover = () => {
      buttonFive.classList.add("skill-editor__type-green");
      buttonFour.classList.add("skill-editor__type-green");
      buttonThree.classList.add("skill-editor__type-green");
      buttonTwo.classList.add("skill-editor__type-green");
      buttonOne.classList.add("skill-editor__type-green");
    };

    const handleMouseLeave = () => {
      buttonFive.classList.remove("skill-editor__type-green");
      buttonFour.classList.remove("skill-editor__type-green");
      buttonThree.classList.remove("skill-editor__type-green");
      buttonTwo.classList.remove("skill-editor__type-green");
      buttonOne.classList.remove("skill-editor__type-green");
    };

    buttonFive.addEventListener("mouseenter", handleHover);
    buttonFive.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonFive.removeEventListener("mouseenter", handleHover);
      buttonFive.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // для кнопки 4
  useEffect(() => {
    const buttonFour = document.querySelector(".button-four");
    const buttonThree = document.querySelector(".button-three");
    const buttonTwo = document.querySelector(".button-two");
    const buttonOne = document.querySelector(".button-one");

    const handleHover = () => {
      buttonFour.classList.add("skill-editor__type-green");
      buttonThree.classList.add("skill-editor__type-green");
      buttonTwo.classList.add("skill-editor__type-green");
      buttonOne.classList.add("skill-editor__type-green");
    };

    const handleMouseLeave = () => {
      buttonFour.classList.remove("skill-editor__type-green");
      buttonThree.classList.remove("skill-editor__type-green");
      buttonTwo.classList.remove("skill-editor__type-green");
      buttonOne.classList.remove("skill-editor__type-green");
    };

    buttonFour.addEventListener("mouseenter", handleHover);
    buttonFour.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonFour.removeEventListener("mouseenter", handleHover);
      buttonFour.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // для кнопки 3
  useEffect(() => {
    const buttonThree = document.querySelector(".button-three");
    const buttonTwo = document.querySelector(".button-two");
    const buttonOne = document.querySelector(".button-one");

    const handleHover = () => {
      buttonThree.classList.add("skill-editor__type-green");
      buttonTwo.classList.add("skill-editor__type-green");
      buttonOne.classList.add("skill-editor__type-green");
    };

    const handleMouseLeave = () => {
      buttonThree.classList.remove("skill-editor__type-green");
      buttonTwo.classList.remove("skill-editor__type-green");
      buttonOne.classList.remove("skill-editor__type-green");
    };

    buttonThree.addEventListener("mouseenter", handleHover);
    buttonThree.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonThree.removeEventListener("mouseenter", handleHover);
      buttonThree.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // для кнопки 2
  useEffect(() => {
    const buttonTwo = document.querySelector(".button-two");
    const buttonOne = document.querySelector(".button-one");

    const handleHover = () => {
      buttonTwo.classList.add("skill-editor__type-green");
      buttonOne.classList.add("skill-editor__type-green");
    };

    const handleMouseLeave = () => {
      buttonTwo.classList.remove("skill-editor__type-green");
      buttonOne.classList.remove("skill-editor__type-green");
    };

    buttonTwo.addEventListener("mouseenter", handleHover);
    buttonTwo.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonTwo.removeEventListener("mouseenter", handleHover);
      buttonTwo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="skill-editor">
      <Title text="Редактор навыка" isEdit={true} />
      <div className="skill-editor__grid-container">
        <div className="skill-editor__grid-item">
          <p className="skill-editor__tag">Навык</p>
          {/* Условный рендеринг для Subtitle на основе информации о редактируемости */}
          {skillInfo.editable ? (
            <input
              className="skills-editor__subtitle"
              type="text"
              value={skillInfo.name}
              onChange={handleNameChange}
            />
          ) : (
            <Subtitle subtitleName={skillInfo ? skillInfo.name : ""} />
          )}
          <p className="skill-editor__tag">Уровень владения навыком</p>
          <div className="skill-editor__rate">
            <RateButton
              className="button-one"
              text={
                <>
                  Только начинаю разбираться
                  <br />
                  в&nbsp;вопросе
                </>
              }
              isSelected={selectedPercentage >= 20}
              onRate={() => handleRateButtonClick(20)}
            />
            <RateButton
              className="button-two"
              text="Могу выполнить простую задачу"
              isSelected={selectedPercentage >= 40}
              onRate={() => handleRateButtonClick(40)}
            />
            <RateButton
              className="button-three"
              text={
                <>
                  Решаю с&nbsp;подсказкой и&nbsp;ошибками
                  <br />
                  сложные задачи
                </>
              }
              isSelected={selectedPercentage >= 60}
              onRate={() => handleRateButtonClick(60)}
            />
            <RateButton
              className="button-four"
              text={
                <>
                  Решаю сложные задачи,
                  <br />
                  но&nbsp;нуждаюсь в&nbsp;обратной связи
                </>
              }
              isSelected={selectedPercentage >= 80}
              onRate={() => handleRateButtonClick(80)}
            />
            <RateButton
              className="button-five"
              text={
                <>
                  Владею на&nbsp;отлично, решаю сложные
                  <br />
                  задачи самостоятельно,
                  <br />
                  без подсказок и&nbsp;обратной связи
                </>
              }
              isSelected={selectedPercentage >= 100}
              onRate={() => handleRateButtonClick(100)}
            />
          </div>
          <p className="skill-editor__tag">Заметки</p>
          <TextField
            multiline // Разрешить многострочный ввод
            rows={4} // Количество строк в поле ввода
            value={notes}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Например, ссылка на туториал или статью"
            sx={{
              width: "608px",
              height: "124px", // Установка высоты поля ввода
              borderRadius: "4px",
            }}
          />
          <ButtonsBackSaveDel
            handleSave={handleSaveSkill}
            handleDelete={handleDelete}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations isSkillsEditor={true} coursesData={coursesData} />
        </div>
      </div>
    </section>
  );
}
