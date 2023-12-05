import React, { useState } from "react";
import "./SearchFormCollection.css";
import Subtitle from "../Subtitle/Subtitle";
import TextField from "@mui/material/TextField";
import { cards } from "../../utils/constants"
import { useNavigate } from "react-router-dom";

export default function SearchFormCollection({ subtitleName, hasButton, handleAddSkill}) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredResults = cards.filter((card) =>
    card.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(value);
    setSearchResults(filteredResults);
  };

   const handleResultClick = (card) => {
    navigate(`/collections/skills/${card.id}`);
  };

  return (
    <form className="search-form-collection">
      <Subtitle subtitleName={subtitleName} />
      <div className="search-form-collection__container">
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
      </div>
      {searchText && (
        <div className="search-form-collection__results">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="search-form-collection__result"
              onClick={() => handleResultClick(result)}
            >
               {result.name}
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
