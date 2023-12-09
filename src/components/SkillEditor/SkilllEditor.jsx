import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SkillEditor.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import RateButton from "./RateButton/RateButton";
import Recommendations from "../Recommendations/Recommendations";
import ButtonsBackSaveDel from "../Buttons/ButtonsBackSaveDel";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function SkillEditor({
  courseForSkillEditor,
  handleEditSkill,
  handleDeleteSkill,
  userData,
}) {
  const { skillId } = useParams();
  const [skillInfo, setSkillInfo] = useState({});
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [buttonOneHover, setButtonOneHover] = useState(false);
  const [buttonTwoHover, setButtonTwoHover] = useState(false);
  const [buttonThreeHover, setButtonThreeHover] = useState(false);
  const [buttonFourHover, setButtonFourHover] = useState(false);
  const [buttonFiveHover, setButtonFiveHover] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [notes, setNotes] = useState(skillInfo.notes || "");
  const navigate = useNavigate();

  useEffect(() => {
    const id = parseInt(skillId, 10);
    if (userData && userData.length > 0) {
      const foundSkill = userData.find((skill) => skill.id === id);
      if (foundSkill) {
        setSkillInfo(foundSkill);
        setSkillName(foundSkill.name);
        setSelectedPercentage(foundSkill.rate);
        setNotes(foundSkill.notes || "");
      }
    }
  }, [skillId, userData]);

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

  const handleNameChange = (event) => {
    if (skillInfo.editable) {
      const newName = event.target.value.toString();
      setSkillInfo((prevSkillInfo) => ({
        ...prevSkillInfo,
        name: newName,
      }));
    }
  };

  function handleSaveSkill() {
    handleEditSkill(skillInfo);
  }

  function handleDelete() {
    handleDeleteSkill(skillInfo.id);
    navigate("/");
  }

  const handleButtonOneHover = () => setButtonOneHover(true);
  const handleButtonOneLeave = () => setButtonOneHover(false);

  const handleButtonTwoHover = () => {
    setButtonTwoHover(true);
    setButtonOneHover(true);
  };

  const handleButtonTwoLeave = () => {
    setButtonTwoHover(false);
    setButtonOneHover(false);
  };

  const handleButtonThreeHover = () => {
    setButtonTwoHover(true);
    setButtonOneHover(true);
    setButtonThreeHover(true);
  };

  const handleButtonThreeLeave = () => {
    setButtonTwoHover(false);
    setButtonOneHover(false);
    setButtonThreeHover(false);
  };

  const handleButtonFourHover = () => {
    setButtonOneHover(true);
    setButtonTwoHover(true);
    setButtonThreeHover(true);
    setButtonFourHover(true);
  };

  const handleButtonFourLeave = () => {
    setButtonTwoHover(false);
    setButtonOneHover(false);
    setButtonThreeHover(false);
    setButtonFourHover(false);
  };

  const handleButtonFiveHover = () => {
    setButtonOneHover(true);
    setButtonTwoHover(true);
    setButtonThreeHover(true);
    setButtonFourHover(true);
    setButtonFiveHover(true);
  };

  const handleButtonFiveLeave = () => {
    setButtonTwoHover(false);
    setButtonOneHover(false);
    setButtonThreeHover(false);
    setButtonFourHover(false);
    setButtonFiveHover(false);
  };

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
              value={skillName}
              onChange={handleNameChange}
            />
          ) : (
            <Subtitle subtitleName={skillName} />
          )}
          <p className="skill-editor__tag">Уровень владения навыком</p>
          <div className="skill-editor__rate">
            <RateButton
              onMouseEnter={handleButtonOneHover}
              onMouseLeave={handleButtonOneLeave}
              className={`${buttonOneHover ? "skill-editor__type-green" : ""}`}
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
              className={`${buttonTwoHover ? "skill-editor__type-green" : ""}`}
              onMouseEnter={handleButtonTwoHover}
              onMouseLeave={handleButtonTwoLeave}
              text="Могу выполнить простую задачу"
              isSelected={selectedPercentage >= 40}
              onRate={() => handleRateButtonClick(40)}
            />
            <RateButton
              className={`${
                buttonThreeHover ? "skill-editor__type-green" : ""
              }`}
              onMouseEnter={handleButtonThreeHover}
              onMouseLeave={handleButtonThreeLeave}
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
              className={`${buttonFourHover ? "skill-editor__type-green" : ""}`}
              onMouseEnter={handleButtonFourHover}
              onMouseLeave={handleButtonFourLeave}
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
              className={`${buttonFiveHover ? "skill-editor__type-green" : ""}`}
              onMouseEnter={handleButtonFiveHover}
              onMouseLeave={handleButtonFiveLeave}
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
            multiline
            rows={4}
            value={notes}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Например, ссылка на туториал или статью"
            sx={{
              width: "608px",
              height: "124px",
              borderRadius: "4px",
            }}
          />
          <ButtonsBackSaveDel
            handleSave={handleSaveSkill}
            handleDelete={handleDelete}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations
            isSkillsEditor={true}
            coursesData={courseForSkillEditor}
          />
        </div>
      </div>
    </section>
  );
}
