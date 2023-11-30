import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import NavBar from "./NavBar/NavBar.jsx";
import Tracker from "./Tracker/Tracker.jsx";
import Collections from "../Collections/Collections.jsx";
import Skills from "../Skills/Skills.jsx";
import SkillEditor from "../SkillEditor/SkilllEditor";

export default function Main({ skillsData, coursesData }) {
  return (
    <main className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Tracker skillsData={skillsData} coursesData={coursesData} handleAddSkill/>} />
        <Route path="/collections" element={<Collections collectionsData/>} />
        <Route path="/collections/skills" element={<Skills />} />
        <Route path="/skill-editor" element={<SkillEditor />} />
      </Routes>
    </main>
  );
}
