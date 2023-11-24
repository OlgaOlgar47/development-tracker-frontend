import React from "react";
import "./Tracker.css";
import SearchForm from "../../SearchForm/SearchForm";
import SkillsContainer from "../../SkillsContainer/SkillsContainer";

export default function Tracker() {
  return (
    <section className="tracker">
      <h1 className="tracker__title">Трекер развития</h1>
      <p className="tracker__text">
        Здесь ты&nbsp;можешь добавлять навыки, которые ты&nbsp;хочешь получить
        или которыми уже обладаешь. А&nbsp;мы&nbsp;подскажем полезные материалы
        для изучения.
      </p>
      <SearchForm />
      <SkillsContainer
        title="Навыки, для изучения"
        isRated={false}
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "Python",
          "React",
          "Node.js",
          "SQL",
          "Vue.js",
          "Angular",
        ]}
      />
      <SkillsContainer title="Навыки, которыми обладаешь" isRated={true} skills={[
          "Композиция и сетки",
          "UX-копирайтинг",
          "Анимация",
          "Исследования",
          "Гайдлайны iOS",
          "Вайрфреймы",
          "Гипотезы",
          "Анализ ЦА",
          "Adobe Photoshop",
        ]}/>
    </section>
  );
}
