import React, { useState } from "react";
import "./SearchForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchForm() {
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

  const handleAddButtonClick = () => {
    // Добавить здесь логику для обработки добавления выбранного навыка
    // Например, можно сохранить выбранный навык в состоянии или выполнить другие действия
    console.log("Выбранный навык:", searchText);
    setSearchText("");
  };

  return (
    <form className="search-form">
      <h2 className="search-form__title">Поиск навыков</h2>
      <div className="search-form__container">
        <TextField
          label="Например, юзабилити тестирование"
          variant="outlined"
          value={searchText}
          onChange={handleInputChange}
          sx={{
            margin: "0 0 20px",
            width: "541px",
            height: "40px",
            fontFamily: "YS Text",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddButtonClick}
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
          Добавить
        </Button>
      </div>
      {searchText && (
        <div className="search-form__results">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="search-form__result"
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};
