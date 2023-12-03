import "./InfoTooltip.css";
import iconLink from "../../images/infoTooltip.svg";

export default function InfoTooltip() {
  
  // const [showSuccessTooltip, setShowSuccessTooltip] = useState(false);
  // const [showErrorTooltip, setShowErrorTooltip] = useState(false);

  return (
    <section className="info-tooltip">
      <img
        src={iconLink}
        className="info-tooltip__img"
        alt="Результат регистрации"
      />
      <div>
        <h3 className="info-tooltip__tittle">Изменения сохранены</h3>
        <p className="info-tooltip__paragraph">Проверь на главном экране</p>
      </div>
    </section>
  );
}
