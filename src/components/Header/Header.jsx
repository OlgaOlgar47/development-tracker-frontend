import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__nav header__nav_active">Трекер</h2>
        <h2 className="header__nav">Подборки</h2>
      </div>
      <img src={logo} className="header__logo" alt="логотип" />
    </header>
  );
}
