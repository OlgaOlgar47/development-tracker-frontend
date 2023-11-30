import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import NavBar from "./NavBar/NavBar.jsx";
import Tracker from "./Tracker/Tracker.jsx";
import Collections from "../Collections/Collections.jsx";
import Skills from "../Skills/Skills.jsx";
import SkillEditor from "../SkillEditor/SkilllEditor";

export default function Main({
  skillsData,
  collectionData,
  coursesData,
  handleEditSkill,
  handleAddSkill,
  handleDeleteSkill,
  collectionsData,
}) {
  return (
    <main className="main">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Tracker
              skillsData={skillsData}
              coursesData={coursesData}
              handleAddSkill={handleAddSkill}
              handleDeleteSkill={handleDeleteSkill}
            />
          }
        />
        <Route path="/collections" element={<Collections collectionsData={collectionsData}
          />} />
        <Route path="/collections/skills" element={<Skills handleAddSkill={handleAddSkill}/>} />
        <Route path="/skill-editor/:skillId" element={<SkillEditor skillsData={[
              { id: 0, name: "мой классный навык", percentage: 0, rate: 1, notes: "kakaka" },
              { id: 1, name: "HTML", percentage: 0, rate: 1, notes: "kakaka" },
              { id: 2, name: "CSS", percentage: 0 },
              { id: 3, name: "JavaScript", percentage: 0 },
              { id: 4, name: "Python", percentage: 0 },
              { id: 5, name: "React", percentage: 0 },
              { id: 6, name: "Node.js", percentage: 0 },
              { id: 7, name: "SQL", percentage: 0 },
              { id: 8, name: "Vue.js", percentage: 0 },
              { id: 9, name: "Angular", percentage: 0 },
              { id: 10, name: "Композиция и сетки", percentage: 80 },
              { id: 11, name: "UX-копирайтинг", percentage: 20 },
              { id: 12, name: "Анимация", percentage: 40 },
              { id: 13, name: "Исследования", percentage: 80 },
              { id: 14, name: "Гайдлайны iOS", percentage: 100 },
              { id: 15, name: "Вайрфреймы", percentage: 20 },
              { id: 16, name: "Анализ ЦА", percentage: 20 },
              { id: 17, name: "Гипотезы", percentage: 60 },
              { id: 18, name: "dobe Photoshop", percentage: 80 },
            ]}/>} />
      </Routes>
    </main>
  );
}
