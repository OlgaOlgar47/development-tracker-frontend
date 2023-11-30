import Paragraph from "../Paragraph/Paragraph";
import Recommendations from "../Recommendations/Recommendations";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import ButtonsBackAdd from "../Buttons/ButtonsBackAdd";
import Title from "../Title/Title";
import "./Skills.css";
import ButtonsDeleteEdit from "../Buttons/ButtonsDeleteEdit";

export default function Skills() {
  return (
    <section className="skills">
      <Title text="Дизайнер интерфейсов" />
      <div className="skills__container">
        <div className="skills__items">
          <Paragraph text="Каждый день мы делаем покупки в интернете, заказываем доставку, читаем новости. UX/UI-дизайнеры делают так, чтобы всё это получалось легко и удобно." />
          <SkillsContainer
            subtitleName="Навыки дизайнера интерфейсов"
            skillsData={[
              { name: "Анализ рынка" },
              { name: "Продуктовые метрики" },
              { name: "Юнит-экономика" },
              { name: "Product growth" },
              { name: "Стратегия продукта" },
              { name: "Воронка AARRR" },
              { name: "Портфель продуктов" },
              { name: "Гайдлайны Android" },
              { name: "CSS" },
              { name: "HTML" },
              { name: "Grid Layout" },
              { name: "Гайдлайны IOS" },
              { name: "Adobe Photoshop" },
              { name: "Анимация" },
              { name: "Гипотезы" },
              { name: "Анализ ЦА" },
              { name: "Вайрфреймы" },
              { name: "Гайдлайны iOS" },
              { name: "UX-копирайтинг" },
              { name: "Композиция и сетки" },
              { name: "Основы Figma" },
              { name: "Tilda" },
              { name: "Типографика" },
            ]}
          />
          <ButtonsBackAdd disabledAdd={true} 
          />
          <SkillsContainer
            subtitleName="В твоих навыках"
            skillsData={[
              { name: "Анализ рынка" },
              { name: "Продуктовые метрики" },
              { name: "Юнит-экономика" },
              { name: "Воронка AARRR" },
            ]}
          />
          <ButtonsDeleteEdit />
        </div>
        <div className="tracker__grid-item">
          <Recommendations />
        </div>
      </div>
    </section>
  );
}
