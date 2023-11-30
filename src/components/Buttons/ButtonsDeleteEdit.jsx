import React from "react";
import "./Buttons.css";
import ButtonTemplate from "./ButtonTemplate";

export default function ButtonsDeleteEdit({ handleDelete, handleEdit, disabledDelete, disabledEdit }) {
  return (
    <div className="buttons-group">
      <ButtonTemplate
        handleButtonClick={handleDelete}
        buttonText="Удалить"
        variant="outlined"
        color="secondary"
        width="160px"
        height="40px"
        gap="10px"
        disabled={disabledDelete}
        disabledColor="#B5B5B7"
        disableBackground="white"
      />
      <ButtonTemplate
        handleButtonClick={handleEdit}
        buttonText="Редактировать"
        variant="contained"
        color="primary"
        width="200px"
        height="40px"
        gap="10px"
        disabled={disabledEdit}
        disabledColor="#FFF"
        disableBackground="#B5B5B7"
        textColor="white"
        hoverBackground="#1D6BF3"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
