import React from "react";
import './Subtitle.css';


export default function Subtitle({subtitleName}) {
  return (
    <h2 className="subtitle">{subtitleName}</h2>
  );
}