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
  // const [value, setValue] = useState(""); // Состояние для хранения значения ввода
  const { skillId } = useParams(); // Получаем параметр из URL
  const [skillInfo, setSkillInfo] = useState(null);

  useEffect(() => {
    // Преобразуем skillId в число, так как он, вероятно, строка
    const id = parseInt(skillId, 10);

    // Найти объект навыка по его id
    const foundSkill = skillsData.find(skill => skill.id === id);
    console.log(foundSkill, skillsData)

    // Установить найденный навык в состояние для отображения на странице
    setSkillInfo(foundSkill);
  }, [skillId, skillsData]);

  const handleInputChange = (event) => {
    // const newValue = event.target.value;
    // setValue(newValue);
    // Здесь вы можете добавить логику для сохранения изменений в базе данных или другом месте
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
              isSelected={false}
            />
            <RateButton
              text="Могу выполнить простую задачу"
              isSelected={false}
            />
            <RateButton
              text={
                <>
                  Решаю с&nbsp;подсказкой и&nbsp;ошибками
                  <br />
                  сложные задачи
                </>
              }
            />
            <RateButton
              text={
                <>
                  Решаю сложные задачи,
                  <br />
                  но&nbsp;нуждаюсь в&nbsp;обратной связи
                </>
              }
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
            />
          </div>
          <p className="skill-editor__tag">Заметки</p>
          <TextField
            multiline // Разрешить многострочный ввод
            rows={4} // Количество строк в поле ввода
            value={skillInfo.nates}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Например, ссылка на туториал или статью"
            sx={{
              width: "608px",
              height: "124px", // Установка высоты поля ввода
              borderRadius: "4px",
            }}
          />
          <ButtonsBackSaveDel handleSave={handleEditSkill} />
        </div>
        <div className="tracker__grid-item">
          <Recommendations isSkillsEditor={true} />
        </div>
      </div>
    </section>
  );
}
