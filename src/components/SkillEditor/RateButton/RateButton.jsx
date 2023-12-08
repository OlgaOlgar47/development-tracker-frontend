import React, { useState } from 'react';
import './RateButton.css'; 

export default function RateButton({ text, isSelected, onRate, className}) {
  // const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onRate}
    >
      <span className='tooltip'>{content}</span>
    </button>
  );
};
