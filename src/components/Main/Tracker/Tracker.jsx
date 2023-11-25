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
        skillsData={[
          { name: "HTML"},
          { name: "CSS"},
          { name: "JavaScript"},
          { name: "Python"},
          { name: "React"},
          { name: "Node.js"},
          { name: "SQL"},
          { name: "Vue.js"},
          { name: "Angular"}
        ]}
      />
      <SkillsContainer title="Навыки, которыми обладаешь" isRated={true} skillsData={[
         { name: "Композиция и сетки", percentage: 60 },
         { name: "UX-копирайтинг", percentage: 30 },
         { name: "Анимация", percentage: 80 },
         { name: "Исследования", percentage: 60 },
         { name: "Гайдлайны iOS", percentage: 80 },
         { name: "Вайрфреймы", percentage: 30 },
         { name: "Анализ ЦА", percentage: 30 },
         { name: "Гипотезы", percentage: 60 },
         { name: "dobe Photoshop", percentage: 80 }
        ]}/>
    </section>
  );
}
