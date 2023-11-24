import React from "react";
import "./Profile.css";
import avatarBig from "../../images/avatar-big-image.svg";
import achievmentImage1 from "../../images/achievment1.jpg";
import achievmentImage2 from "../../images/achievment2.jpg";
import achievmentImage3 from "../../images/achievment3.jpg";
import checkmark from "../../images/checkmark.svg";

export default function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__subtitle">Профиль</h2>
      <div className="profile-container">
        <div className="profile__profile-container">
          <img
            className="profile__avatar"
            src={avatarBig}
            alt="аватар пользователя"
          ></img>
          <div className="profile__user-info">
            <h3 className="profile__user-name">Татьяна Киян</h3>
            <p className="profile__user-about">
              <span className="profile__user-about profile__user-about_bold">
                Профессия
              </span>
              Дизайнер интерфейсов
            </p>
          </div>
        </div>
        <div className="profile__achievements">
          <h3 className="profile__achievements-title">Достижения</h3>
          <div className="profile__achievements-images">
            <img
              className="profile__achievements-image"
              src={achievmentImage1}
              alt=""
            ></img>
            <img
              className="profile__achievements-image"
              src={achievmentImage2}
              alt=""
            ></img>
            <img
              className="profile__achievements-image"
              src={achievmentImage3}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <h3 className="profile__skills-title">Освоенные навыки</h3>
      <div className="profile__skills-list">
        <div className="profile__skill">
          <p className="profile__skill-name">Figma</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">UX-копирайтинг</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Анимация</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Исследования</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Гайдлайны iOS</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Вайрфреймы</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Гипотезы</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Анализ ЦА</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Гайдлайны Android</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">UX-Тестирования</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">UI-Kit</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Конкурентный анализ</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Adobe Photoshop</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">Аудит юзабилити</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
        <div className="profile__skill">
          <p className="profile__skill-name">JBTD и User Stories</p>
          <img className="profile__skill-checkmark" src={checkmark} alt="галочка"></img>
        </div>
      </div>
    </div>
  );
}
