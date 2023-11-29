import React from "react";
import './Main.css';
import NavBar from './NavBar/NavBar.jsx';
// import Tracker from './Tracker/Tracker.jsx';
import SkillEditor from "../SkillEditor/SkilllEditor";

export default function Main() {
  return (
    <main className="main">
      <NavBar />
      {/* <Tracker /> */}
      <SkillEditor skillName="Композиция и сетки" />
    </main>
  );
}