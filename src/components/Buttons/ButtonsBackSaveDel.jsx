import React from "react";
import "./Buttons.css";
import ButtonTemplate from "./ButtonTemplate";
import { useNavigate } from "react-router-dom";

export default function ButtonsBackSaveDel({ handleSave, handleDelete }) {
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
        handleButtonClick={handleSave}
        buttonText="Сохранить"
        variant="contained"
        color="primary"
        width="200px"
        height="40px"
        gap="10px"
        textColor="#FFFFFF"
        hoverBackground="#1D6BF3"
        hoverTextColor="#FFFFFF"
      />
      <ButtonTemplate
        handleButtonClick={handleDelete}
        buttonText="удалить"
        variant="outlined"
        color="secondary"
        width="160px"
        height="40px"
        gap="10px"
      />
    </div>
  );
}
