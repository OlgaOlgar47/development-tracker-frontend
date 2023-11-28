import React, { useState } from "react";
import "./SearchForm.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonTemplate from "../Button/ButtonTemplate";
import TextField from "@mui/material/TextField";

export default function SearchForm({ subtitleName, hasButton }) {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "Vue.js",
    "Angular",
  ];

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredResults = skills.filter((skill) =>
      skill.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(value);
    setSearchResults(filteredResults);
  };

  const handleButtonClick = () => {
    // Добавить здесь логику для обработки добавления выбранного навыка
    // Например, можно сохранить выбранный навык в состоянии или выполнить другие действия
    console.log("Выбранный навык:", searchText);
    setSearchText("");
  };

  return (
    <form className="search-form">
      <Subtitle subtitleName={subtitleName} />
      <div className="search-form__container">
        <TextField
          label="Например, юзабилити тестирование"
          variant="outlined"
          value={searchText}
          onChange={handleInputChange}
          size="small"
          sx={{
            width: "541px",
            height: "40px",
            fontFamily: "YS Text",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        />
        {hasButton && (<ButtonTemplate
          handleButtonClick={handleButtonClick}
          buttonText="Добавить"
        />)}
      </div>
      {searchText && (
        <div className="search-form__results">
          {searchResults.map((result, index) => (
            <div key={index} className="search-form__result">
              {result}
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
