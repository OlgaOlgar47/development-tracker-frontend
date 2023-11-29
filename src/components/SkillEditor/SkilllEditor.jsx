import React, { useState } from "react";
import "./SkillEditor.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import RateButton from "./RateButton/RateButton";
import Recommendations from "../Recommendations/Recommendations";
import ButtonsBackSaveDel from "../Buttons/ButtonsBackSaveDel";
import TextField from "@mui/material/TextField";

export default function SkillEditor({ skillName }) {
  const [value, setValue] = useState(""); // Состояние для хранения значения ввода

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    // Здесь вы можете добавить логику для сохранения изменений в базе данных или другом месте
  };

  return (
    <section className="skill-editor">
      <Title text="Редактор навыка" isEdit={true} />
      <div className="skill-editor__grid-container">
        <div className="skill-editor__grid-item">
          <p className="skill-editor__tag">Навык</p>
          <Subtitle subtitleName={skillName} />
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
              isSelected={true}
            />
            <RateButton
              text="Могу выполнить простую задачу"
              isSelected={true}
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
            value={value}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Например, ссылка на туториал или статью"
            sx={{
              width: "608px",
              height: "124px", // Установка высоты поля ввода
              borderRadius: "4px",
            }}
          />
          <ButtonsBackSaveDel />
        </div>
        <div className="tracker__grid-item">
          <Recommendations isSkillsEditor={true} />
        </div>
      </div>
    </section>
  );
}
