import "./InfoTooltip.css";
import iconOK from "../../images/infoTooltip.svg";
import iconX from "../../images/RedX.svg";

export default function InfoTooltip({ isVisible, isSuccessfull, customMessage }) {

  let messageTitle = isSuccessfull ? "Изменения сохранены" : "Ошибка сохранения";

  return (
    <section
      className={`info-tooltip ${isVisible ? "visible" : ""} ${
        isSuccessfull ? "" : "info-tooltip__type_false"
      }`}
    >
      <img
        src={isSuccessfull ? iconOK : iconX}
        className="info-tooltip__img"
        alt="Результат регистрации"
      />
      <div>
        <h3
          className={`${
            isSuccessfull
              ? "info-tooltip__tittle-true"
              : "info-tooltip__tittle-false"
          }`}
        >
          {messageTitle}
        </h3>
        <p
          className={`${
            isSuccessfull
              ? "info-tooltip__paragraph-true"
              : "info-tooltip__paragraph-false"
          }`}
        >
          {customMessage}
        </p>
      </div>
    </section>
  );
}

