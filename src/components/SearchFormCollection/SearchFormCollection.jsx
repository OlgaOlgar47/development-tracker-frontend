import React, { useState } from "react";
import "./SearchFormCollection.css";
import Subtitle from "../Subtitle/Subtitle";
import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";

export default function SearchFormCollection({ collectionData, subtitleName, handleSearchResults }) {
  const [searchText, setSearchText] = useState('');
  // const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredResults = collectionData.filter((card) =>
      card.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(value);
    handleSearchResults(filteredResults); // Обновление результатов поиска в родительском компоненте
  };

  // const handleResultClick = (card) => {
  //   navigate(`/collections/skills/${card.id}`);
  // };

  return (
    <form className="search-form-collection">
      <Subtitle subtitleName={subtitleName} />
      <div className="search-form-collection__container">
        <TextField
          label="Например, аналитик"
          variant="outlined"
          value={searchText}
          onChange={handleInputChange}
          size="small"
          sx={{
            width: '541px',
            height: '40px',
            fontFamily: 'YS Text',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
          }}
        />
      </div>
    </form>
  );
}