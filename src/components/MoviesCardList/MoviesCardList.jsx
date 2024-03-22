import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  loading,
  movies,
  handleAddSavedMovie,
  savedMovies,
  savedMoviesData,
  handleRemoveSavedMovie,
  setSavedMovies
}) {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth); //состояние ширины экрана
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(getInitialVisibleMoviesCount()); //состояние количества карточек

  //Обраточик события при изменении размера экрана и установка количества карточек в зависимости от этого значения
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    setVisibleMoviesCount(getInitialVisibleMoviesCount());
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [width]);

  //Функция определения количества карточек в зависимости от ширины экрана
  function getInitialVisibleMoviesCount() {
    if (width > 1279) {
      return 12;
    } else if (width <= 1279 && width >= 768) {
      return 8;
    } else if (width < 767) {
      return 5;
    }
  }

  // Увеличиваем количество видимых фильмов при нажатии на кнопку "Еще"
  const handleShowMore = () => {
    if (width > 1240) {
      setVisibleMoviesCount(prevCount => prevCount + 3);
    } else if (width <= 1240 && width >= 550) {
      setVisibleMoviesCount(prevCount => prevCount + 2);
    } else if (width < 550) {
      setVisibleMoviesCount(prevCount => prevCount + 2);
    }
  };

  // console.log('movies', movies);
  // console.log('handleAddSavedMovie', handleAddSavedMovie);
  // console.log('savedMovies', savedMovies);
  // console.log('savedMoviesData', savedMoviesData);
  // console.log('savedMoviesData', savedMoviesData);
  // console.log(typeof savedMoviesData);
  // console.log(Array.isArray(savedMoviesData));

  return (
    <section className="cards">
      {loading ? (
        <Preloader />
      ) : (
        <div className="cards__container">
          {location.pathname === '/movies' ? (
            <ul className="cards__list">
              {movies.slice(0, visibleMoviesCount).map(card => (
                <MoviesCard
                  key={card.id}
                  handleAddSavedMovie={handleAddSavedMovie}
                  savedMoviesData={savedMoviesData}
                  movie={card}
                />
              ))}
            </ul>
          ) : null}
          {location.pathname === '/saved-movies' ? (
            <ul className="cards__list">
              {savedMovies.movies?.map(card => (
                <MoviesCard
                  key={card._id}
                  handleAddSavedMovie={handleAddSavedMovie}
                  savedMovies={savedMovies}
                  movie={card}
                  handleRemoveSavedMovie={handleRemoveSavedMovie}
                  setSavedMovies={setSavedMovies}
                />
              ))}
            </ul>
          ) : null}
          {movies?.length > visibleMoviesCount && location.pathname !== '/saved-movies' && (
            <button type="button" className="cards__button" onClick={handleShowMore}>
              Ещё
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
