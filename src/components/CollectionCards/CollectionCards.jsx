import React from "react";
import "./CollectionCards.css";
import { cards } from "../../utils/constants"

export default function CollectionCards() {

return (
  <article className="collectionCards">
      {cards.map((card, index) => (
        <div key={index} className="collectionCards__wpapper">
          <img
            className="collectionCards__image"
            src={card.src}
            alt="картинка навыка"
          ></img>
          <h4 className="collectionCards__title">{card.title}</h4>
          <div className="collectionCards__container">
            <p className="collectionCards__tag">{card.time}</p>
            <a
              href="https://practicum.yandex.ru/catalog"
              className="collectionCards__details-link"
            >
              Подробнее
            </a>
          </div>
        </div>
      ))}
  </article>
);
}
