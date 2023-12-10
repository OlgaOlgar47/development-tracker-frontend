import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import NavBar from "./NavBar/NavBar.jsx";
import Tracker from "./Tracker/Tracker.jsx";
import Collections from "../Collections/Collections.jsx";
import Skills from "../Skills/Skills.jsx";
import SkillEditor from "../SkillEditor/SkilllEditor";

export default function Main({
  serverError,
  userData,
  skillsData,
  collectionData,
  coursesData,
  coursesDataForCollection,
  courseForSkillEditor,
  handleEditSkill,
  handleAddSkill,
  handleDeleteSkill,
  toggleVisibility,
  handleInfoTooltip,
}) {
  return (
    <main className="main">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Tracker
              serverError={serverError}
              userData={userData}
              skillsData={skillsData}
              coursesData={coursesData}
              handleAddSkill={handleAddSkill}
              handleDeleteSkill={handleDeleteSkill}
              toggleVisibility={toggleVisibility}
              handleInfoTooltip={handleInfoTooltip}
            />
          }
        />
        <Route
          path="/collections"
          element={
            <Collections
              collectionData={collectionData}
            />
          }
        />
        <Route
          path="/collections/skills/:collectionId"
          element={
            <Skills
              collectionData={collectionData}
              handleAddSkill={handleAddSkill}
              skillsData={skillsData}
              coursesDataForCollection={coursesDataForCollection}
              userData={userData}
              coursesData={coursesData}
              handleDeleteSkill={handleDeleteSkill}
            />
          }
        />
        <Route
          path="/skill-editor/:skillId"
          element={
            <SkillEditor
              userData={userData}
              handleEditSkill={handleEditSkill}
              coursesData={coursesData}
              courseForSkillEditor={courseForSkillEditor}
              handleDeleteSkill={handleDeleteSkill}
            />
          }
        />
      </Routes>
    </main>
  );
}
