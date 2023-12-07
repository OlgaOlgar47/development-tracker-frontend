import { useEffect, useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import Recommendations from "../Recommendations/Recommendations";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import Title from "../Title/Title";
import "./Skills.css";
import UserSkillsContainer from "../UserSkillsContainer/UserSkillsContainer";
import { useParams } from "react-router-dom";

export default function Skills({
  coursesDataForCollection,
  skillsData,
  handleAddSkill,
  userData,
  collectionData,
  handleDeleteSkill,
}) {
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

  const matchingSkills = userData.filter((skill) => {
    return skillsData.some((userSkill) => userSkill.name === skill.name);
  });

  const subtitleName = `Навыки ` + collection.name;

  const collectionSkills = [...collection.skills]

  console.log('skills говорит collectionData: ', collectionData);

  return (
    <section className="skills">
      <Title text={collection.name} />
      <div className="skills__container">
        <div className="skills__items">
          <Paragraph text={collection.description} />
          <SkillsContainer
            // - нет этой записи:
            subtitleName={subtitleName}
            handleAddSkill={handleAddSkill}
            // скилы
            skillsData={collectionSkills}
            // skillsData={collection.skills}
            // skillsData={skillsData.skills}
          />
          <UserSkillsContainer
            subtitleName="В твоих навыках"
            userData={matchingSkills}
            handleDeleteSkill={handleDeleteSkill}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations
            coursesData={coursesDataForCollection}
          />
        </div>
      </div>
    </section>
  );
}
