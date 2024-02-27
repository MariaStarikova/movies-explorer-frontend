import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from '../../images/searchIcon.svg';

function SearchForm() {
  return (
    <section className="search">
        <div className="search__container">
      <form
        className="form__search"
        // onSubmit={handleSubmit}
      >
        <img src={SearchIcon} alt="Картинка лупы" className="form__icon" />
        <input
          className="form__input_search"
          type="text"
          placeholder="Фильм"
          // value={email}
          // onChange={handleChangeEmail}
          required
        ></input>
        <button className="form__button-submit_search" type="submit">
        Найти
        </button>
      </form>
      <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
