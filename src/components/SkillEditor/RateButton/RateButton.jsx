import React, { useState } from 'react';
import './RateButton.css'; 

export default function RateButton({ text, isSelected, onRate, className, onMouseEnter, onMouseLeave}) {
  const [content, setContent] = useState('');

  const handleMouseEnter = () => {
    setContent(text); 
  };

  const handleMouseLeave = () => {
    setContent('');
  };

  return (
    <button
      type="button"
      className={`${className} skill-editor__rate-button ${isSelected ? 'selected' : ''}`}
      onMouseEnter={(event) => {
        if (onMouseEnter) {
          onMouseEnter(event);
        }
        handleMouseEnter();
      }}
      onMouseLeave={(event) => {
        if  (onMouseLeave)  {
         onMouseLeave(event);
        }
        handleMouseLeave();
      }}
      onClick={onRate}
    >
      <span className='tooltip'>{content}</span>
    </button>
  );
};
