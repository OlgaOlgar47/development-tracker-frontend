import "./InfoTooltip.css";
import iconOK from "../../images/infoTooltip.svg";
import iconX from "../../images/RedX.svg";

export default function InfoTooltip({ isVisible, effect: { isSucessfull } }) {
  return (
    <section
      className={`info-tooltip ${isVisible ? "visible" : ""} ${
        isSucessfull ? "" : "info-tooltip_type_false"
      }`}
    >
      <img
        src={isSucessfull ? iconOK : iconX}
        className="info-tooltip__img"
        alt="Результат регистрации"
      />
      <div>
        <h3
          className={`${
            isSucessfull
              ? "info-tooltip__tittle-true"
              : "info-tooltip__tittle-false"
          }`}
        >
          {isSucessfull ? "Изменения сохранены" : "Ошибка сохранения"}
        </h3>
        <p
          className={`${
            isSucessfull
              ? "info-tooltip__paragraph-true"
              : "info-tooltip__paragraph-false"
          }`}
        >
          {isSucessfull
            ? "Проверь на главном экране"
            : "Попробуй сохранить ещё раз."}
        </p>
      </div>
    </section>
  );
}
