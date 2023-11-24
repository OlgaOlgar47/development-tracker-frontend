import React from "react";
import "./Tracker.css";
import Profile from "../../Profile/Profile";

export default function Tracker() {
  return (
    <section className="tracker">
      <h1 className="tracker__title">Трекер развития</h1>
     <Profile />
    </section>
  );
}