import React from "react";
import Button from "@mui/material/Button";

export default function ButtonTemplate({ handleButtonClick, buttonText}) {
  return (
    <Button
    variant="contained"
    color="primary"
    onClick={handleButtonClick}
    size="small"
    sx={{
      width: "148px",
      height: "40px",
      padding: "10px 20px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "6px",
      background: "#B5B5B7",
    }}
  >
    {buttonText}
  </Button>
  );
}