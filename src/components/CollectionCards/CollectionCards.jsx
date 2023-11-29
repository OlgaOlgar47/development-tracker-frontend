import React from "react";
import "./CollectionCards.css";
import { cards } from "../../utils/constants";
import { Link } from "react-router-dom";

export default function CollectionCards() {
  return (
    <article className="collectionCards">
      {cards.map((card, index) => (
        <div key={index} className="collectionCards__wpapper">
          <Link to={"/professions/skills"} className="collectionCards__link">
            <img
              className="collectionCards__image"
              src={card.image}
              onMouseEnter={(e) => (e.currentTarget.src = card.imageHover)}
              onMouseLeave={(e) => (e.currentTarget.src = card.image)}
              alt="картинка навыка"
            ></img>
            <h4 className="collectionCards__title">{card.name}</h4>
            <div className="collectionCards__container">
              <p className="collectionCards__tag">{card.count}</p>
              <a
                href="https://practicum.yandex.ru/catalog"
                className="collectionCards__details-link"
              >
                Подробнее
              </a>
            </div>
          </Link>
        </div>
      ))}
    </article>
  );
}
