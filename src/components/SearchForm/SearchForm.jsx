import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from '../../images/searchIcon.svg';

function SearchForm({
  setIsChecked,
  isChecked,
  handleSearchInputChange,
  handleShortsFilter,
  searchInput,
  handleSearchSubmit
}) {
  //Сабмит формы после отправки запроса
  const handleSubmit = event => {
    event.preventDefault();
    handleSearchSubmit(searchInput); // Передаем текст запроса на обработку
  };

  return (
    <section className="search page__search">
      <form className="form search__form" onSubmit={handleSubmit}>
        <div className="search__form-container">
          <img src={SearchIcon} alt="Картинка лупы" className="form__icon" />
          <input
            className="form__input-search"
            type="text"
            placeholder="Фильм"
            name="search"
            value={searchInput}
            onChange={handleSearchInputChange}
            required
          ></input>
          <button className="form__button-search" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleShortsFilter={handleShortsFilter}
        />
      </form>
    </section>
  );
}

export default SearchForm;
