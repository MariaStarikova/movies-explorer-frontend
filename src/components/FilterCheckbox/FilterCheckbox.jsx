import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ value, onChange }) {
  return (
    <div className="filter">
      <input
        type="checkbox"
        className="filter__input"
        //   checked={value}
        //   onChange={onChange}
      />
      <label className="filter__title">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
