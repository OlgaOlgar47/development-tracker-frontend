import React from "react";
import Button from "@mui/material/Button";

export default function ButtonTemplate({
  handleButtonClick,
  buttonText,
  variant,
  color,
  textColor,
  width,
  height,
  gap,
  disabled,
  disabledColor,
  disableBackground,
  hoverBackground,
  hoverTextColor
}) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleButtonClick}
      size="small"
      sx={{
        fontSize: "14px", // Добавляем стиль fontSize
        fontFamily: "YS Text",
        width: width,
        height: height,
        padding: "10px 20px",
        justifyContent: "center",
        alignItems: "center",
        gap: gap,
        borderRadius: "6px",
        "&:disabled": {
          background: disableBackground,
          color: disabledColor,
          border: "1px solid #B5B5B7",
        },
        "&.MuiButton-root": {
          boxShadow: "none",
          color:textColor,
        },
        "&:hover": {
          // Стили для hover
          background: hoverBackground,
          color: hoverTextColor,
        },
      }}
      disabled={disabled} // Устанавливаем значение disabled
    >
      {buttonText}
    </Button>
  );
}
