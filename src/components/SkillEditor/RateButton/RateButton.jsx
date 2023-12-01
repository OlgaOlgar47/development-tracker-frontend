import React, { useState } from 'react';
import './RateButton.css'; 

export default function RateButton({buttonId, text, isSelected, onRate}) {
  const [isHovered, setIsHovered] = useState(false);
  const [content, setContent] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
    setContent(text); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setContent('');
  };

  return (
    <button
      type="button"
      id={buttonId}
      className={`skill-editor__rate-button ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onRate}
    >
      <span className='tooltip'>{content}</span>
    </button>
  );
};
