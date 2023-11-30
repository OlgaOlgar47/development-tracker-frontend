import React from "react";
import "./Buttons.css";
import ButtonTemplate from "./ButtonTemplate";
import { useNavigate } from "react-router-dom";

export default function ButtonsBackAdd({ handleAdd, disabledAdd }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="buttons-group">
      <ButtonTemplate
        handleButtonClick={goBack}
        buttonText="Назад"
        variant="outlined"
        color="default"
        width="160px"
        height="40px"
        gap="10px"
        hoverBackground="#1D6BF3"
        hoverTextColor="#FFFFFF"
      />
      <ButtonTemplate
        handleButtonClick={handleAdd}
        buttonText="Добавить"
        variant="contained"
        color="primary"
        width="200px"
        height="40px"
        gap="10px"
        textColor="#FFFFFF"
        hoverBackground="#1D6BF3"
        hoverTextColor="#FFFFFF"
        disabled={disabledAdd}
        disabledColor="#FFF"
        disableBackground="#B5B5B7"
      />
    </div>
  );
}
