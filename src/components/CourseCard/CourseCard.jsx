import React from "react";
import './CourseCard.css';

export default function CourseCard({name, image}) {
  return (
    <article className="card">
    <div className="card__tag">Курс</div>
    <h4 className="card__title">{name}</h4>
    <img className="card__image" src={image} alt="создание резюме иллюстрация"></img>
    <a href="https://practicum.yandex.ru/catalog" target="_blank" rel="noreferrer" className="card__details-link">
      Подробнее
    </a>
  </article>
  );
}