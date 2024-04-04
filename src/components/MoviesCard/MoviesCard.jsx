import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  handleAddSavedMovie,
  movie,
  savedMovies,
  savedMoviesData,
  handleRemoveSavedMovie,
  setSavedMovies
}) {
  const image = movie.image;
  const location = useLocation();
  const [isSaveMovie, setIsSaveMovie] = useState(true); //Состояния для того, чтобы сохранить фильм и отобразить иконку

  // console.log('savedMovies', savedMovies);
  // console.log('savedMoviesData', savedMoviesData);
  // console.log('movie', movie);
  // console.log('savedMoviesData.movies', savedMoviesData.movies);

  //Если мы на маршруте /movies, то проверяем какие фильмы сохранены
  useEffect(() => {
    if (location.pathname === '/movies' && savedMoviesData.movies) {
      // console.log('savedMoviesData', savedMoviesData);
      setIsSaveMovie(!savedMoviesData.movies.some(savedMovie => savedMovie.movieId === movie.id));
    }
  }, [location.pathname, movie.id, savedMoviesData]);

  //Конвертация в часы и минуты продолжительность
  function convertingMinutes(movie) {
    const duration = movie.duration;
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const result = `${hours}ч ${minutes}м`;
    return result;
  }

  //Клик на кнопку "Сохранить"
  const handleClickSave = () => {
    // console.log('movie', movie);
    setIsSaveMovie(!isSaveMovie);
    handleAddSavedMovie(movie);
    // console.log('savedMoviesData', savedMoviesData);
    // setIsSaveMovie(savedMoviesData.movies.some(item => movie.id === item.movieId));
  };

  // Клик на кнопку удаления из сохраненных и на иконку галочки
  const handleClickRemove = () => {
    if (location.pathname === '/movies') {
    let savedMovieId;
    savedMoviesData.movies.forEach(savedMovie => {
      if (savedMovie.movieId === movie.id) {
        savedMovieId = savedMovie._id;
      }
    });
    handleRemoveSavedMovie(savedMovieId);
    console.log('savedMovieId', savedMovieId);
  }

    if (location.pathname === '/saved-movies') {
    handleRemoveSavedMovie(movie._id);
    }
  };

  return (
    <li className="card">
      {location.pathname === '/movies' ? (
        <div className="card__container">
          <div className="card__top">
            <button
              type="button"
              className={!isSaveMovie ? 'card__button_hidden' : 'card__button'}
              onClick={handleClickSave}
            >
              Сохранить
            </button>
            {!isSaveMovie ? (
              <button
                type="button"
                className="card__button_icon"
                onClick={handleClickRemove}
              ></button>
            ) : null}
            <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
              <img
                className="card__image"
                src={
                  location.pathname === '/movies'
                    ? `https://api.nomoreparties.co/${image.url}`
                    : image
                }
                alt={movie.nameRU}
              />
            </a>
          </div>
          <div className="card__description">
            <h2 className="card__title">{movie.nameRU}</h2>
            <p className="card__duration">{convertingMinutes(movie)}</p>
          </div>
        </div>
      ) : null}
      {location.pathname === '/saved-movies' ? (
        <div className="card__container">
          <div className="card__top-saved">
            <button type="button" className="card__button-del" onClick={handleClickRemove}></button>
            <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
              <img
                className="card__image"
                src={
                  location.pathname === '/movies'
                    ? `https://api.nomoreparties.co/${image.url}`
                    : image
                }
                alt={movie.nameRU}
              />
            </a>
          </div>
          <div className="card__description">
            <h2 className="card__title">{movie.nameRU}</h2>
            <p className="card__duration">{convertingMinutes(movie)}</p>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export default MoviesCard;
