import React from "react";
import "./NavBar.css";
import Avatar from "../../../image/avatar.svg";
import Exit from "../../../image/exit.svg";
// import Arrow from "../../../image/arrow.svg";

export default function NavBar() {
  return (
    <section className="navBar">
      <div className="navBar__container">
        <div className="navBar__profile">
          <img src={Avatar} className="navBar__avatar" alt="Фото профиля" />
          {/* <h3 className="navBar__name">Имя</h3> */}
        </div>
        {/* <div className="navBar__profile-acseleration">
          <div>
            <h3 className="navBar__name">Текущий этап</h3>
            <h3 className="navBar__name">Акселерация</h3>
          </div>
          <img src={Arrow} className="navBar__arrow" alt="стрелка вправо" />
        </div> */}
      </div>
      <h2 className="navBar__link">Вакансии</h2>
      <h2 className="navBar__link navBar__link_type-line">Мастерская</h2>
      <h2 className="navBar__link navBar__link_type-line">Дневник</h2>
      <h2 className="navBar__link navBar__link_type-line">Трекер развития</h2>
      <h2 className="navBar__link">Контакты</h2>
      <h2 className="navBar__link navBar__link_type-bottom">Лента</h2>
      <button className="navBar__button">Оффер&nbsp;принят</button>
      <h2 className="navBar__link navBar__link_type-center">Уйти в отпуск</h2>
      <h2 className="navBar__link navBar__link_type-center">Инфо профиля</h2>
      <button className="navBar__container-exit">
        <img src={Exit} className="navBar__exit" alt="иконка кнопки выхода" />
        <h3 className="navBar__link navBar__link_type-bottom">Выход</h3>
      </button>
    </section>
  );
}
