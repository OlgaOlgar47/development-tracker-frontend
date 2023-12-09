import React, { useState } from 'react';
import './RateButton.css'; 

export default function RateButton({ text, isSelected, onRate, className, onMouseEnter, onMouseLeave}) {
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
      onMouseEnter={(event) => {
        if (onMouseEnter) {
          onMouseEnter(event); // Вызов обработчика onMouseEnter, переданного через пропсы
        }
        handleMouseEnter(); // Ваш локальный обработчик onMouseEnter
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
