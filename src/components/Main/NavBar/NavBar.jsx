import React from "react";
import "./NavBar.css";
import Avatar from "../../../images/avatar.svg";
import Exit from "../../../images/exit.svg";
import Arrow from "../../../images/arrow.svg";
import Vacansi from "../../../images/vacansi.svg";
import Masterskaya from "../../../images/masterskaya.svg";
import Dnevnik from "../../../images/dnevnik.svg";
import Tracker from "../../../images/tracker.svg";
import Kontaktu from "../../../images/kontaktu.svg";
import Lenta from "../../../images/lenta.svg";
import Profile from "../../../images/profile.svg";
import Otpusk from "../../../images/otpusk.svg";

export default function NavBar() {
  return (
    <section className="navBar">
      <div className="navBar__container">
        <div className="navBar__profile">
          <img src={Avatar} className="navBar__avatar" alt="Фото профиля" />
          <h3 className="navBar__name">Имя</h3>
        </div>
        <div className="navBar__profile-acseleration">
          <div className="navBar__profile-acseleration-container">
            <h3 className="navBar__name navBar__name_type_margin">
              Текущий этап
            </h3>
            <h3 className="navBar__acsseleration navBar__acsseleration_type_margin">
              Акселерация
            </h3>
          </div>
          <img src={Arrow} className="navBar__arrow" alt="стрелка вправо" />
        </div>
      </div>
      <div className="navBar__container-menu">
        <img src={Vacansi} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link">Вакансии</h2>
      </div>
      <div className="navBar__container-menu">
        <img
          src={Masterskaya}
          className="navBar__icon"
          alt="иконка пункта меню"
        />
        <h2 className="navBar__link">Мастерская</h2>
      </div>
      <div className="navBar__container-menu">
        <img src={Dnevnik} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link navBar__link_type_bottom">Дневник</h2>
      </div>
      <div className="navBar__container-menu navBar__container-menu_type_line navBar__container-menu_type_margin navBar__container-menu_type_padding">
        <img src={Tracker} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link navBar__link_type_bottom">
          Трекер развития
        </h2>
      </div>
      <div className="navBar__container-menu">
        <img src={Kontaktu} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link">Контакты</h2>
      </div>
      <div className="navBar__container-menu">
        <img src={Lenta} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link navBar__link_type_bottom">Лента</h2>
      </div>
      <button className="navBar__button">Оффер&nbsp;принят</button>
      <div className="navBar__container-menu">
        <img src={Otpusk} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link navBar__link_type_center">Уйти в отпуск</h2>
      </div>
      <div className="navBar__container-menu">
        <img src={Profile} className="navBar__icon" alt="иконка пункта меню" />
        <h2 className="navBar__link navBar__link_type_center">Инфо профиля</h2>
      </div>
      <button className="navBar__container-exit">
        <img src={Exit} className="navBar__exit" alt="иконка кнопки выхода" />
        <h3 className="navBar__link navBar__link_type_bottom">Выход</h3>
      </button>
    </section>
  );
}
