import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, handleShortsFilter }) {
  // Переключение чекбокса
  const handleChange = () => {
    handleShortsFilter(!isChecked);
  };

  return (
    <div className="filter">
      <input
        type="checkbox"
        className="filter__input"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="filter__title">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
