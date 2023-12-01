import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import NavBar from "./NavBar/NavBar.jsx";
import Tracker from "./Tracker/Tracker.jsx";
import Collections from "../Collections/Collections.jsx";
import Skills from "../Skills/Skills.jsx";
import SkillEditor from "../SkillEditor/SkilllEditor";
// import { userDataConst } from "../../utils/constants";

export default function Main({
  serverError,
  userData,
  skillsData,
  collectionData,
  coursesData,
  handleEditSkill,
  handleAddSkill,
  handleDeleteSkill,
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
            />
          }
        />
        <Route
          path="/collections"
          element={<Collections collectionData={collectionData} />}
        />
        <Route
          path="/collections/skills"
          element={<Skills handleAddSkill={handleAddSkill} />}
        />
        <Route
          path="/skill-editor/:skillId"
          element={
            <SkillEditor
              userData={userData}
              handleEditSkill={handleEditSkill}
            />
          }
        />
      </Routes>
    </main>
  );
}
