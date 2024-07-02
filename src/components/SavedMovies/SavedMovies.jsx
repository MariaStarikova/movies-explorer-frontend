import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { mainApi } from '../../utils/MainApi.js';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  loggedIn,
  handleAddSavedMovie,
  savedMovies,
  setSavedMovies,
  handleRemoveSavedMovie
}) {
  const [searchInput, setSearchInput] = useState(''); //Состояние для поля поиска
  const [isChecked, setIsChecked] = useState(false); //Состояние для чекбокса
  const [loading, setLoading] = useState(false);
  const [initialSavedMovies, setInitialSavedMovies] = useState([]); //Сохранение изначального массива с фильмами
  const [error, setError] = useState(null); //Состояние ошибки сервера
  const [noResults, setNoResults] = useState(false); //Состояние для отображения сообщения "Ничего не найдено"

  //Запрос на сервер для получения сохраненных фильмов
  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      mainApi
        .getSavedMovies()
        .then(moviesData => {
          setSavedMovies(moviesData);
          setInitialSavedMovies(moviesData); //Сохраняем исходный массив в переменную
          setLoading(false);
          setNoResults(false);
        })
        .catch(error => {
          setError(error);
          console.error(`Ошибка при получении данных: ${error}`);
        });
    }
  }, [loggedIn, setSavedMovies]);

  //Функция поиска фильма
  const filterMovies = (query, shorts) => {
    let filteredMovies;
    // Если запроса не было, либо поле поиска очищено, то отображаются все сохраненные фильмы
    if (!query && !shorts) {
      setSavedMovies(initialSavedMovies);
      setNoResults(false);
      return;
    }
    // console.log('query, shorts', query, shorts);
    // console.log('savedMovies', savedMovies.movies);

    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filteredMovies = initialSavedMovies.movies.filter(
        movie =>
          movie.nameRU.toLowerCase().includes(lowercaseQuery) ||
          movie.nameEN.toLowerCase().includes(lowercaseQuery)
      );
    } else {
      // Если запроса нет, отображаем все сохраненные фильмы
      filteredMovies = initialSavedMovies.movies;
    }

    // Фильтрация по короткометражкам
    if (shorts) {
      filteredMovies = filteredMovies.filter(movie => movie.duration < 40);
    }
    setSavedMovies(prevState => ({ ...prevState, movies: filteredMovies }));

    if (filteredMovies.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  // Функция для чекбокса
  const handleShortsFilter = isChecked => {
    setIsChecked(isChecked); // Состояние чекбокса
    filterMovies(searchInput, isChecked);
  };

  //Функция для поля поиска
  const handleSearchInputChange = event => {
    const value = event.target.value;
    if (value === '' || null) {
      setSavedMovies(initialSavedMovies);
    }
    setSearchInput(value);
  };

  // Функция для сабмита формы
  const handleSearchSubmit = () => {
    setLoading(true);
    filterMovies(searchInput, isChecked);
    setLoading(false);
  };

  // console.log('savedMovies', savedMovies.movies);

  return (
    <section className="movies">
      <SearchForm
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        handleSearchInputChange={handleSearchInputChange}
        handleShortsFilter={handleShortsFilter}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      {loading && savedMovies.movies ? (
        <Preloader />
      ) : (
        <MoviesCardList
          handleAddSavedMovie={handleAddSavedMovie}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          handleRemoveSavedMovie={handleRemoveSavedMovie}
          loading={loading}
        />
      )}
      {error && (
        <span className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз.
        </span>
      )}
      {noResults && <span className="movies__error">Ничего не найдено.</span>}
    </section>
  );
}

export default SavedMovies;
