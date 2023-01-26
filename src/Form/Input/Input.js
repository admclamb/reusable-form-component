import React from 'react';
import { snakeToTitleCase } from '../../snakeToTitleCase';
const Input = ({ value, handleChange, name, type = 'text' }) => {
  const formattedName = snakeToTitleCase(name);

  return (
    <div className="input-container">
      <label htmlFor={name}>{formattedName}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={formattedName}
      />
    </div>
  );
};

export default Input;
