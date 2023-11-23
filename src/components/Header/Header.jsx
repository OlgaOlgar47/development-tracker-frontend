import React from "react";
import "./Header.css";
import logo from "../../image/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="логотип" />
    </header>
  );
}
