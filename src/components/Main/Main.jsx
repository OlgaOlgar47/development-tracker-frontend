import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import NavBar from "./NavBar/NavBar.jsx";
import Tracker from "./Tracker/Tracker.jsx";
import Professions from "../Professions/Professions.jsx";
import Skills from "../Skills/Skills.jsx";

export default function Main() {
  return (
    <main className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Tracker />} />
        <Route path="/professions" element={<Professions />} />
        <Route path="/professions/skills" element={<Skills />} />
      </Routes>
    </main>
  );
}
