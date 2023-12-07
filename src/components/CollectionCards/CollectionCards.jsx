import "./CollectionCards.css";
import { Link } from "react-router-dom";

export default function CollectionCards({ collectionData }) {

  return (
    <article className="collection-cards">
      {collectionData.map((card, index) => (
        <div
          key={index}
          className="collection-cards__wpapper"
          onMouseEnter={(e) =>
            (e.currentTarget.querySelector(".collection-cards__image").src =
              card.imageHover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.querySelector(".collection-cards__image").src =
              card.image)
          }
        >
          <Link
            to={`/collections/skills/${card.id}`}
            className="collection-cards__link"
          >
            <img
              className="collection-cards__image"
              src={card.image}
              alt="картинка навыка"
            ></img>
            <h4 className="collection-cards__title">{card.name}</h4>
            <div className="collection-cards__container">
              <p className="collection-cards__tag">
                {card.count}{" "}
                {card.count === 1
                  ? "навык"
                  : card.count > 1 && card.count < 5
                  ? "навыка"
                  : "навыков"}
              </p>
              <p className="collection-cards__details-else">Подробнее</p>
            </div>
          </Link>
        </div>
      ))}
    </article>
  );
}
