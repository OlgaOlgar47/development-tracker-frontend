import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__container">
        <Link
          to={"/"}
          className={`header__nav ${
            location.pathname === "/" ? "header__nav_active" : ""
          }`}
        >
          Трекер
        </Link>
        <Link
          to={"/collections"}
          className={`header__nav ${
            location.pathname === "/collections" ||
            location.pathname === "/collections/skills"
              ? "header__nav_active"
              : ""
          }`}
        >
          Подборки
        </Link>
      </div>
      <img src={logo} className="header__logo" alt="логотип" />
    </header>
  );
}
