// import React, { useState } from "react";
import "./CollectionCards.css";
import { cards } from "../../utils/constants";
import { Link } from "react-router-dom";

export default function CollectionCards({collectionsData}) {
  // const [selectedCard, setSelectedCard] = useState(null);

  // const handleImageClick = (index) => {
  //   setSelectedCard(index);
  //   console.log("Image clicked");
  // };

  return (
    <article className="collection-cards">
      {cards.map((card, index) => (
        <div key={index} className="collection-cards__wpapper">
                  {/* <div key={index} className={`collection-cards__wpapper ${selectedCard === index ? "selected" : ""}`}> */}

          <Link to={"/collections/skills"} className="collection-cards__link">
            <img
              className="collection-cards__image collection-cards__image_active"
              src={card.image}
              onMouseEnter={(e) => (e.currentTarget.src = card.imageHover)}
              onMouseLeave={(e) => (e.currentTarget.src = card.image)}
              // onClick={() => handleImageClick(index)}
              alt="картинка навыка"
            ></img>
            <h4 className="collection-cards__title">{card.name}</h4>
            <div className="collection-cards__container">
              <p className="collection-cards__tag">{card.count}</p>
              <p className="collection-cards__details-else">Подробнее</p>
            </div>
          </Link>
        </div>
      ))}
    </article>
  );
}
