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
  const [shorts, setShorts] = useState(false); //Состояние для коротких фильмов
  const [searchInput, setSearchInput] = useState(''); //Состояние для поля поиска
  const [isChecked, setIsChecked] = useState(false); //Состояние для чекбокса
  const [loading, setLoading] = useState(false);
  const [initialSavedMovies, setInitialSavedMovies] = useState([]); //Сохранение изначального массива с фильмами
  const [error, setError] = useState(null); //Состояние ошибки сервера
  const [noResults, setNoResults] = useState(false); //Состояние для отображения сообщения "Ничего не найдено"

  //Получение из локального хранилища состояния чекбокса и значения инпута для сохраненных фильмов
  useEffect(() => {
    const storedSearchQuery = localStorage.getItem('searchQuerySaved');
    const storedIsChecked = localStorage.getItem('isCheckedSaved');
    // console.log('storedSearchQuery', storedSearchQuery);
    // console.log('storedIsChecked', storedIsChecked);

    if (storedSearchQuery) {
      setSearchInput(storedSearchQuery);
    }

    if (storedIsChecked) {
      setIsChecked(JSON.parse(storedIsChecked));
    }
  }, []);

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

  //Фильтрация по запросам поиска из локальной истории
  useEffect(() => {
    // console.log('searchInput', searchInput);
    // console.log('isChecked', isChecked);
    // console.log('initialSavedMovies', initialSavedMovies);
    // Вызов filterMovies только если все необходимые данные загружены
    if (
      initialSavedMovies &&
      initialSavedMovies.movies &&
      initialSavedMovies.movies.length > 0 &&
      searchInput &&
      isChecked !== null
    ) {
      filterMovies(searchInput, isChecked);
    }
  }, [initialSavedMovies]);

  //Функция моментального поиска фильма при введении в поле значения
  const filterMovies = (query, shorts) => {
    // Если запроса не было, либо поле поиска очищено, то отображаются все сохраненные фильмы
    if (query === null || query.trim() === '') {
      setSavedMovies(initialSavedMovies);
      setNoResults(false);
      return;
    }
    // console.log('query, shorts', query, shorts);
    // console.log('savedMovies', savedMovies.movies);

    if (query !== null) {
      const lowercaseQuery = query.toLowerCase();
      const filteredMovies =
        initialSavedMovies && initialSavedMovies.movies
          ? initialSavedMovies.movies.filter(
              movie =>
                (!shorts || movie.duration < 40) &&
                lowercaseQuery &&
                (movie.nameRU.toLowerCase().includes(lowercaseQuery.toLowerCase()) ||
                  movie.nameEN.toLowerCase().includes(lowercaseQuery.toLowerCase()))
            )
          : [];

      setSavedMovies(prevState => ({ ...prevState, movies: filteredMovies }));

      if (filteredMovies.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    }
  };

  // Функция для чекбокса 
  const handleShortsFilter = isChecked => {
    setIsChecked(isChecked); // Состояние чекбокса
    setShorts(isChecked);
    filterMovies(searchInput, isChecked);
  };

  //Функция для поля поиска
  const handleSearchInputChange = event => {
    const value = event.target.value;
    if (value === '' || null) {
      setSavedMovies(initialSavedMovies);
    }
    // console.log('value', value);
    setSearchInput(value);
    filterMovies(value === '' ? null : value, isChecked);
  };

  // Функция для сабмита формы
  const handleSearchSubmit = () => {
    setLoading(true);
    filterMovies(searchInput, isChecked);
    setLoading(false);
    // Сохранение значений в локальное хранилище при отправке формы
    localStorage.setItem('searchQuerySaved', searchInput);
    localStorage.setItem('isCheckedSaved', isChecked);
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
