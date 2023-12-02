import React from "react";
import "./InfoToolTip.css";

export default function InfoToolTip({text}) {
  return (
    <p className="info-tool-tip">{text}</p>
  );
}