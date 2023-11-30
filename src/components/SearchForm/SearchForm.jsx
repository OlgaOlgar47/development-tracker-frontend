import React, { useState } from "react";
import "./SearchForm.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonTemplate from "../Buttons/ButtonTemplate";
import TextField from "@mui/material/TextField";

export default function SearchForm({ subtitleName, hasButton, skillsData, handleAddSkill}) {
  // const skills={skillsData}
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
    "Типографика",
    "Композиция",
    "Генерация идей",
    "Tilda",
    "Figma",
    "Adobe Photoshop",
    "Анализ ЦА",
    "Гипотезы",
    "Исследования",
    "UX-копирайтинг",
    "UX-тестирование",
    "Конкурентный анализ",
    "JTBD и User Stories",
    "Анимация",
    "Вайрфреймы",
    "UI-Kit",
    "Аудит юзабилити"
  ];

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

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
    let itemsToAdd = selectedItems.length > 0 ? selectedItems.slice() : [];
  
    if (searchText && !selectedItems.includes(searchText)) {
      itemsToAdd.push(searchText);
      setSearchText('');
    }
  
    setSelectedItems(prevItems => {
      const filteredItems = prevItems.filter(item => !itemsToAdd.includes(item));
      return [...filteredItems, ...itemsToAdd];
    });
  
    handleAddSkill(itemsToAdd);
  };
  
  

  const handleResultClick = (index) => {
    // Добавить или удалить элемент из списка выбранных элементов
    const selectedItem = searchResults[index];
    setSelectedItems((prevItems) => {
      if (prevItems.includes(selectedItem)) {
        return prevItems.filter((item) => item !== selectedItem);
      } else {
        return [...prevItems, selectedItem];
      }
    });
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
                selectedItems.includes(result) ? 'selected' : ''
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
