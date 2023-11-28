import React from "react";
import "./SkillEditor.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import RateButton from "./RateButton/RateButton";
import Recommendations from "../Recommendations/Recommendations";

export default function SkillEditor({ skillName }) {
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
            />
            <RateButton text="Могу выполнить простую задачу" />
            <RateButton
              text={
                <>
                  Решаю с&nbsp;подсказкой и&nbsp;ошибками
                  <br />
                  сложные задачи
                </>
              }
            />
            <RateButton  text={
                <>
                  Решаю сложные задачи,<br />
                  но&nbsp;нуждаюсь в&nbsp;обратной связи
                </>
              } />
            <RateButton  text={
                <>
                  Владею на&nbsp;отлично, решаю сложные<br />
                  задачи самостоятельно,<br />
                  без подсказок и&nbsp;обратной связи
                </>
              } />
          </div>
        </div>
        <div className="tracker__grid-item">
          <Recommendations title="Как развить" />
        </div>
      </div>
    </section>
  );
}
