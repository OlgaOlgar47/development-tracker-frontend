import { useState, useEffect } from "react";
import Paragraph from "../Paragraph/Paragraph";
import Recommendations from "../Recommendations/Recommendations";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import Title from "../Title/Title";
import "./Skills.css";
import UserSkillsContainer from "../UserSkillsContainer/UserSkillsContainer.tsx";
import { useParams } from "react-router-dom";

export default function Skills({
  coursesDataForCollection,
  handleAddSkill,
  userData,
  collectionData,
  handleDeleteSkill,
}) {

  const { collectionId } = useParams();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (collectionData && collectionData.length > 0) {
      const id = parseInt(collectionId, 10);
      const foundCollection = collectionData.find((item) => item.id === id);
      if (foundCollection) {
        setCollection(foundCollection);
      }
    }
  }, [collectionData, collectionId]);

  let collectionSkills = [];
  if (collection && collection.skills) {
    collectionSkills = [...collection.skills];
  }

  const matchingSkills = userData.filter((skill) => {
    return collectionSkills.some((userSkill) => userSkill.name === skill.name);
  });

  const subtitleName = `Навыки подборки: ` + collection.name;

  return (
    <section className="skills">
      <Title text={collection.name} />
      <div className="skills__container">
        <div className="skills__items">
          <Paragraph text={collection.description} />
          <SkillsContainer
            userData={userData}
            subtitleName={subtitleName}
            handleAddSkill={handleAddSkill}
            skillsData={collection.skills}
          />
          <UserSkillsContainer
            isSkills={true}
            subtitleName="В твоих навыках"
            userData={matchingSkills}
            handleDeleteSkill={handleDeleteSkill}
            hasBlueButons={false}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations coursesData={coursesDataForCollection} />
        </div>
      </div>
    </section>
  );
}
