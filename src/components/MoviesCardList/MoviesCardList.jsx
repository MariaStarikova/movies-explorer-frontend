import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import { initialCards } from '../../utils/constants.js';

function MoviesCardList({ loading }) {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  if (width > 1024) {
    return (
      <section className="cards">
        {loading ? (
          <Preloader />
        ) : (
          <div className="cards__container">
            <ul className="card__list">
              {initialCards.map(card => (
                <li className="card__item">
                  <MoviesCard
                    id={card.id}
                    name={card.nameRU}
                    duration={card.duration}
                    image={card.image}
                  />
                </li>
              ))}
            </ul>
            {initialCards.length > 12 && location.pathname !== '/saved-movies' && (
              <button
                type="button"
                className="cards__button"
                // onClick={setCards}
              >
                Ещё
              </button>
            )}
          </div>
        )}
      </section>
    );
  }
  if (1024 > width > 550) {
    return (
      <section className="cards">
        {loading ? (
          <Preloader />
        ) : (
          <div className="cards__container">
            <ul className="card__list">
              {initialCards.map(card => (
                <li className="card__item">
                  <MoviesCard
                    id={card.id}
                    name={card.nameRU}
                    duration={card.duration}
                    image={card.image}
                  />
                </li>
              ))}
            </ul>
            {initialCards.length > 10 && location.pathname !== '/saved-movies' && (
              <button
                type="button"
                className="cards__button"
                // onClick={setCards}
              >
                Ещё
              </button>
            )}
          </div>
        )}
      </section>
    );
  }
  return (
    <section className="cards">
      {loading ? (
        <Preloader />
      ) : (
        <div className="cards__container">
          <ul className="card__list">
            {initialCards.map(card => (
              <li className="card__item">
                <MoviesCard
                  id={card.id}
                  name={card.nameRU}
                  duration={card.duration}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
          {initialCards.length > 5 && location.pathname !== '/saved-movies' && (
            <button
              type="button"
              className="cards__button"
              // onClick={setCards}
            >
              Ещё
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
