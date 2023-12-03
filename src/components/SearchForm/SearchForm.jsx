import React, { useState } from "react";
import "./SearchForm.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonTemplate from "../Buttons/ButtonTemplate";
import TextField from "@mui/material/TextField";

export default function SearchForm({ subtitleName, hasButton, skillsData, handleAddSkill}) {
  // const skills={skillsData}
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'SQL' },
    { name: 'Vue.js' },
    { name: 'Angular' },
    { name: 'Типографика' },
    { name: 'Композиция' },
    { name: 'Генерация идей' },
    { name: 'Tilda' },
    { name: 'Figma' },
    { name: 'Adobe Photoshop' },
    { name: 'Анализ ЦА' },
    { name: 'Гипотезы' },
    { name: 'Исследования' },
    { name: 'UX-копирайтинг' },
    { name: 'UX-тестирование' },
    { name: 'Конкурентный анализ' },
    { name: 'JTBD и User Stories' },
    { name: 'Анимация' },
    { name: 'Вайрфреймы' },
    { name: 'UI-Kit' },
    { name: 'Аудит юзабилити' }
  ];

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const disabledAdd = searchText.length === 0;

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredResults = skills.filter((skill) =>
      skill.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(value);
    setSearchResults(filteredResults);
  };

  const handleButtonClick = () => {
    let skillsToAdd = [];
    if (selectedItems.length > 0) {
      skillsToAdd = selectedItems.slice();
      setSelectedItems([]); // Очищаем selectedItems
    } else if (searchText) {
      skillsToAdd = [{name: searchText}];
      setSearchText(''); // Очищаем searchText
    }
    console.log("skills to add:", skillsToAdd)
    handleAddSkill(skillsToAdd);
  };

  // useEffect(() => {
  //   console.log("skillsToAdd", skillsToAdd);
  // }, [skillsToAdd]);

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
               {result.name}
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
