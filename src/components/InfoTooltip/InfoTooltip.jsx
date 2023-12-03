import "./InfoTooltip.css";
import iconOK from "../../images/infoTooltip.svg";
import iconX from "../../images/RedX.svg";

export default function InfoTooltip({ isVisible, effect: { isSucessfull } }) {
  return (
    <section className={`info-tooltip ${isVisible ? "visible" : ""}`}>
      <img
        src={isSucessfull ? iconOK : iconX}
        className="info-tooltip__img"
        alt="Результат регистрации"
      />
      <div>
        <h3 className="info-tooltip__tittle">
          {isSucessfull ? "Изменения сохранены" : "Ошибка сохранения"}
        </h3>
        <p className="info-tooltip__paragraph">
          {isSucessfull
            ? "Проверь на главном экране"
            : "Попробуй сохранить ещё раз."}
        </p>
      </div>
    </section>
  );
}
