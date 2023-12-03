import "./CollectionCards.css";
import { cards } from "../../utils/constants";
import { Link } from "react-router-dom";

export default function CollectionCards({ collectionData }) {
  
  return (
    <article className="collection-cards">
      {cards.map((card, index) => (
        <div key={index} className="collection-cards__wpapper">
          <Link to={`/collections/skills/${card.name}`} className="collection-cards__link"
          >
            <img
              className="collection-cards__image"
              src={card.image}
              onMouseEnter={(e) => (e.currentTarget.src = card.imageHover)}
              onMouseLeave={(e) => (e.currentTarget.src = card.image)}
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
