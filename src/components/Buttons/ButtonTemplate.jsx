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
        fontSize: "11px",
        fontFamily: "YS Text",
        fontWeight: 500,
        width: width,
        height: height,
        padding: "10px 20px",
        justifyContent: "center",
        alignItems: "center",
        gap: gap,
        borderRadius: "6px",
        textAlign: "center",
        lineHeight: "normal",
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
          background: hoverBackground,
          color: hoverTextColor,
        },
      }}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  );
}
