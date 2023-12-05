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
    { id: 1, name: "Анализ рынка" },
    { id: 2, name: "Продуктовые метрики" },
    { id: 3, name: "Юнит-экономика" },
    { id: 4, name: "Product growth" },
    { id: 5, name: "Стратегия продукта" },
    { id: 6, name: "Воронка AARRR" },
    { id: 7, name: "Портфель продуктов" },
    { id: 8, name: "Гайдлайны Android" },
    { id: 9, name: "CSS" },
    { id: 10, name: "HTML" },
    { id: 11, name: "Grid Layout" },
    { id: 12, name: "Гайдлайны IOS" },
    { id: 13, name: "Adobe Photoshop" },
    { id: 14, name: "Анимация" },
    { id: 15, name: "Гипотезы" },
    { id: 16, name: "Анализ ЦА" },
    { id: 17, name: "Вайрфреймы" },
    { id: 18, name: "Гайдлайны iOS" },
    { id: 19, name: "UX-копирайтинг" },
    { id: 20, name: "Композиция и сетки" },
    { id: 21, name: "Основы Figma" },
    { id: 22, name: "Tilda" },
    { id: 23, name: "Типографика" },
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

  const matchingSkills = userDataToRender.filter((skill) => {
    return skillsData.some((userSkill) => userSkill.name === skill.name);
  });

  return (
    <section className="skills">
      <Title text="Дизайнер"/>
      {/* <Title text={collection.name} /> */}
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
