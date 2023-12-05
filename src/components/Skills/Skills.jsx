import { useEffect, useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import Recommendations from "../Recommendations/Recommendations";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import Title from "../Title/Title";
import "./Skills.css";
import UserSkillsContainer from "../UserSkillsContainer/UserSkillsContainer";
import { useParams } from "react-router-dom";

export default function Skills({
  handleAddSkill,
  userDataToRender,
  coursesDataForCollection,
  collectionData,
}) {
  const skillsData = [
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
  ];

  const { collectionId } = useParams();
  const [collection, setCollection] = useState({});

  useEffect(() => {
    if (collectionData && collectionData.length > 0) {
      const id = parseInt(collectionId, 10);
      const foundCollection = collectionData.find(
        (collection) => collection.id === id
      );
      if (foundCollection) {
        setCollection(foundCollection);
      } else {
        // Handle the case when the collection with the given ID is not found
        // You might want to set an appropriate state or perform other actions
      }
    }
  }, [collectionId, collection, collectionData]);

  const matchingSkills = skillsData.filter((skill) => {
    return userDataToRender.some((userSkill) => userSkill.name === skill.name);
  });

  return (
    <section className="skills">
      {/* <Title text="Дизайнер"/> */}
      <Title text={collection.name} />
      <div className="skills__container">
        <div className="skills__items">
          <Paragraph text="Каждый день мы делаем покупки в интернете, заказываем доставку, читаем новости. UX/UI-дизайнеры делают так, чтобы всё это получалось легко и удобно." />
          <SkillsContainer
            handleAddSkill={handleAddSkill}
            subtitleName="Навыки дизайнера интерфейсов"
            skillsData={skillsData}
          />
          <UserSkillsContainer
            subtitleName="В твоих навыках"
            userDataToRender={matchingSkills}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations
            userDataToRender={userDataToRender}
            coursesDataForCollection={coursesDataForCollection}
          />
        </div>
      </div>
    </section>
  );
}
