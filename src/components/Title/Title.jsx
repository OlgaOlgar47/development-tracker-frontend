import React from "react";
import './Title.css';


export default function Title({text}) {
  return (
    <h1 className="title">{text}</h1>
  );
}