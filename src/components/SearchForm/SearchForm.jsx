import React, { useState } from "react";
import "./SearchForm.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonTemplate from "../Buttons/ButtonTemplate";
import TextField from "@mui/material/TextField";

export default function SearchForm({ subtitleName, hasButton, skillsData }) {
  const skills={skillsData}
  // const skills = [
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "Python",
  //   "React",
  //   "Node.js",
  //   "SQL",
  //   "Vue.js",
  //   "Angular",
  //   "Типографика",
  //   "Композиция",
  //   "Генерация идей",
  //   "Tilda",
  //   "Figma",
  //   "Adobe Photoshop",
  //   "Анализ ЦА",
  //   "Гипотезы",
  //   "Исследования",
  //   "UX-копирайтинг",
  //   "UX-тестирование",
  //   "Конкурентный анализ",
  //   "JTBD и User Stories",
  //   "Анимация",
  //   "Вайрфреймы",
  //   "UI-Kit",
  //   "Аудит юзабилити"
  // ];

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); //Переменная состояния для хранения выбранного элемента

  const disabledAdd = searchText.length === 0;

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


  const handleResultClick = (index) => {
    // Установить индекс выбранного элемента
    setSelectedItem(index === selectedItem ? null : index);
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
          variant="contained"
          color="primary"
          width="148px"
          height="40px"
          gap="10px"
          disabled={disabledAdd}
          disabledColor="#FFF"
          disableBackground="#B5B5B7"
          textColor="white"
          hoverBackground="#1D6BF3"
          hoverTextColor="#FFFFFF"
        />)}
      </div>
      {searchText && (
        <div className="search-form__results">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className={`search-form__result ${
                index === selectedItem ? 'selected' : ''
              }`}
              onClick={() => handleResultClick(index)}
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
