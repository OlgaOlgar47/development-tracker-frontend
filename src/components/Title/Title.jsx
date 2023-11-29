import React from "react";
import './Title.css';


export default function Title({text, isEdit}) {
  return (
    <h1 className={isEdit ? "title title__skill-editor" : "title"}>{text}</h1>
  );
}