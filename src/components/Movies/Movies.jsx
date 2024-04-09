import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { moviesApi } from '../../utils/MoviesApi.js';

function Movies({
  loggedIn,
  handleAddSavedMovie,
  setSavedMovies,
  savedMovies,
  handleRemoveSavedMovie
}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [shorts, setShorts] = useState(false); //Состояние для коротких фильмов
  const [searchInput, setSearchInput] = useState(''); //Состояние для поля поиска
  const [isChecked, setIsChecked] = useState(false); //Состояние для чекбокса
  const [initialMovies, setInitialMovies] = useState([]); //Сохранение изначального массива с фильмами
  const [error, setError] = useState(null); //Состояние ошибки сервера
  const [noResults, setNoResults] = useState(false); //Состояние для отображения сообщения "Ничего не найдено"
  const [prevSearchResults, setPrevSearchResults] = useState([]); // Состояние для сохранения результатов предыдущего поиска

  //Запрос на сервер для получения всех фильмов при монтировании компонента и отрисовка на странице
  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      moviesApi
        .getInitialCards()
        .then(moviesData => {
          setInitialMovies(moviesData);
          setLoading(false);
          // console.log('moviesData: ', moviesData);
        })
        .catch(error => {
          setError(error);
          console.error(`Ошибка при получении данных: ${error}`);
        });
    }
  }, [loggedIn]);

  // Получение из локального хранилища значений поиска и состояния чекбокса, отрисовка с учетом этих значений для текущего пользователя
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const storedSearchQuery = localStorage.getItem('searchQuery');
      const storedIsChecked = localStorage.getItem('isChecked');

      if (storedSearchQuery) {
        setSearchInput(storedSearchQuery);
      }

      if (storedIsChecked) {
        setIsChecked(JSON.parse(storedIsChecked));
      }

      filterMovies(storedSearchQuery, JSON.parse(storedIsChecked));
      // console.log('storedSearchQuery', storedSearchQuery);
      // console.log('storedIsChecked', storedIsChecked);
    }
  }, [initialMovies]);

  //Функция поиска фильма 
  const filterMovies = (query, shorts) => {
    if (loading === true) {
      setError(false);
      setNoResults(false);
    }

    // Проверяем, что query не равен null
    if (query !== null && query.trim() !== '') {
      const lowercaseQuery = query.toLowerCase();
      const filteredMovies = initialMovies.filter(
        movie =>
          (!shorts || movie.duration < 40) &&
          lowercaseQuery &&
          (movie.nameRU.toLowerCase().includes(lowercaseQuery) ||
            movie.nameEN.toLowerCase().includes(lowercaseQuery))
      );
      // console.log('filteredMovies', filteredMovies);
      setPrevSearchResults(filteredMovies);
      setMovies(filteredMovies);


      if (filteredMovies.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    }
  };

  //Функция для чекбокса, которая устанавливает состояние чекбокса и состояние короткометражек
  const handleShortsFilter = isChecked => {
    setIsChecked(isChecked);
    filterMovies(searchInput, isChecked);

    // Сохранение значения в локальное хранилище
    localStorage.setItem('isChecked', isChecked);
    // console.log('isChecked handleShortsFilter', isChecked);
  };

  //Функция для установки введенного значения в инпут
  const handleSearchInputChange = event => {
    const value = event.target.value;
    setSearchInput(value);
  };

  //Функция сабмита при нажатии на кнопку "Найти"
  const handleSearchSubmit = () => {
    setLoading(true);
    filterMovies(searchInput, isChecked);
    setLoading(false);

    // Сохранение значения в локальное хранилище 
    localStorage.setItem('searchQuery', searchInput);
  };

  // Обработка очистки строки поиска
  const handleSearchClear = () => {
    setMovies(prevSearchResults);
    setSearchInput('');
    setNoResults(false);
  };

  // console.log('loggedIn', loggedIn);
  // console.log(movies, "Movies");
  // console.log('savedMovies', savedMovies);

  return (
    <section className="movies">
      <SearchForm
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        handleSearchInputChange={handleSearchInputChange}
        handleShortsFilter={handleShortsFilter}
        searchInput={searchInput}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchClear={handleSearchClear}
      />
      {searchInput || prevSearchResults.length > 0 ? (
        <MoviesCardList
          loading={loading}
          handleAddSavedMovie={handleAddSavedMovie}
          setSavedMovies={setSavedMovies}
          savedMoviesData={savedMovies}
          movies={movies}
          handleRemoveSavedMovie={handleRemoveSavedMovie}
        />
      ) : (
        !loading && noResults && <span className="movies__error">Ничего не найдено.</span>
      )}
      {error && (
        <span className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз.
        </span>
      )}
    </section>
  );
}

export default Movies;

