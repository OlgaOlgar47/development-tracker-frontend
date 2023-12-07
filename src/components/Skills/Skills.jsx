import { useState, useEffect } from "react";
import Paragraph from "../Paragraph/Paragraph";
import Recommendations from "../Recommendations/Recommendations";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import Title from "../Title/Title";
import "./Skills.css";
import UserSkillsContainer from "../UserSkillsContainer/UserSkillsContainer";
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
  console.log('collectionData пришла в Skills: ', collectionData);

  useEffect(() => {
    console.log("useEffect вызван");
    console.log('collectionData в useEffect: ', collectionData);

    if (collectionData && collectionData.length > 0) {
      console.log("useEffect called", collectionData);
      const id = parseInt(collectionId, 10);
      const foundCollection = collectionData.find((item) => item.id === id);
      
      console.log('foundCollection: ', foundCollection);

      if (foundCollection) {
        setCollection(foundCollection);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionId]);


  let collectionSkills = [];
  if (collection && collection.skills) {
    collectionSkills = [...collection.skills];
  }
  

  const matchingSkills = userData.filter((skill) => {
    return collectionSkills.some((userSkill) => userSkill.name === skill.name);
  });

  // const subtitleName = `Навыки ` + collection.name;
  console.log("collection", collection)


  return (
    <section className="skills">
      <Title text={collection.name} />
      <div className="skills__container">
        <div className="skills__items">
          <Paragraph text={collection.description} />
          <SkillsContainer
            // subtitleName={subtitleName}
            handleAddSkill={handleAddSkill}
            skillsData={collection.skills}
          />
          <UserSkillsContainer
            subtitleName="В твоих навыках"
            userData={matchingSkills}
            handleDeleteSkill={handleDeleteSkill}
          />
        </div>
        <div className="tracker__grid-item">
          <Recommendations coursesData={coursesDataForCollection} />
        </div>
      </div>
    </section>
  );
}
