import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./SkillEditor.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import RateButton from "./RateButton/RateButton";
import Recommendations from "../Recommendations/Recommendations";
import ButtonsBackSaveDel from "../Buttons/ButtonsBackSaveDel";
import TextField from "@mui/material/TextField";

export default function SkillEditor({ handleEditSkill, skillsData }) {
  const { skillId } = useParams(); // Получаем параметр из URL
  const [skillInfo, setSkillInfo] = useState(null);
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [notes, setNotes] = useState(''); 


  const handleRateButtonClick = (percentage) => {
    console.log('rrrr')
    setSelectedPercentage(percentage); // Обновление выбранного процента
    setSkillInfo(prevSkillInfo => ({
      ...prevSkillInfo,
      percentage: percentage
    }));
  };

  const handleSaveSkill = () => {
    setSkillInfo(prevSkillInfo => ({
      ...prevSkillInfo,
      notes: notes
    }));
    handleEditSkill(skillInfo);
    console.log(skillInfo, "skillinfo")
  };

  useEffect(() => {
    // Преобразуем skillId в число, так как он, вероятно, строка
    const id = parseInt(skillId, 10);
    const foundSkill = skillsData.find(skill => skill.id === id);
    console.log(foundSkill, skillsData)
    setSelectedPercentage(foundSkill.percentage)
    setSkillInfo(foundSkill);
    setNotes(foundSkill.notes);
  }, [skillId, skillsData]);


  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setNotes(newValue); // Обновление состояния заметок
  };

  if (!skillInfo) {
    return <div>Loading...</div>; // Отобразить загрузку, пока данные не загружены
  }

  return (
    <section className="skill-editor">
      <Title text="Редактор навыка" isEdit={true} />
      <div className="skill-editor__grid-container">
        <div className="skill-editor__grid-item">
          <p className="skill-editor__tag">Навык</p>
          <Subtitle subtitleName={skillInfo.name} />
          <p className="skill-editor__tag">Уровень владения навыком</p>
          <div className="skill-editor__rate">
            <RateButton
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
              text="Могу выполнить простую задачу"
              isSelected={selectedPercentage >= 40}
              onRate={() => handleRateButtonClick(40)}
            />
            <RateButton
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
          <ButtonsBackSaveDel handleSave={handleSaveSkill} />
        </div>
        <div className="tracker__grid-item">
          <Recommendations isSkillsEditor={true} />
        </div>
      </div>
    </section>
  );
}
