import React, { useState } from "react";
import "./SearchForm.css";
import Subtitle from "../Subtitle/Subtitle";
import ButtonTemplate from "../Buttons/ButtonTemplate";
import TextField from "@mui/material/TextField";

export default function SearchForm({
  subtitleName,
  hasButton,
  skillsData,
  handleAddSkill,
  userData,
  handleInfoTooltip,
}) {
  const skills = [...skillsData];
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const disabledAdd = searchText.length === 0;

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredResults = skills.filter((skill) =>
      skill.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(value);
    setSearchResults(filteredResults);
  };

  const handleResultClick = (index) => {
    const clickedItem = searchResults[index];
    const isAlreadyAdded = userData.some(
      (item) => item.name === clickedItem.name
    );

    if (!isAlreadyAdded) {
      setSelectedItem(clickedItem);
    } else {
      handleInfoTooltip(false, "Такой навык уже добавлен");
    }
  };

  const handleButtonClick = () => {
    let skillToAdd = null;
    if (selectedItem) {
      skillToAdd = selectedItem;
      setSelectedItem(null);
    } else if (searchText) {
      skillToAdd = { name: searchText };
    }
    if (skillToAdd) {
      handleAddSkill(skillToAdd);
    }
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
        {hasButton && (
          <ButtonTemplate
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
          />
        )}
      </div>
      {searchText && (
        <div className="search-form__results">
          {searchResults.slice(0, 9).map((result, index) => (
            <div
              key={index}
              className={`search-form__result ${
                selectedItem && selectedItem.name === result.name
                  ? "selected"
                  : ""
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
