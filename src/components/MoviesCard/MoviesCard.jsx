import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import CardIcon from '../../images/iconSaved.svg';

function MoviesCard(props) {
  const location = useLocation();
  const [isSaveMovie, setIsSaveMovie] = useState(true);

  function convertingMinutes(props) {
    const duration = props.duration;
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const result = `${hours}ч ${minutes}м`;
    return result;
  }

  const handleClickSave = () => {
    setIsSaveMovie(!isSaveMovie);
  }

  return (
    <section className="card">
      {location.pathname === '/movies' ? (
        <div className="card__container">
          <div className="card__top">
            <button
              type="button"
              className={!isSaveMovie ? "card__button" : "card__button_active" }
              onClick={handleClickSave}
            >
              Сохранить
            </button>
            {!isSaveMovie ? <img className="card__icon" src={CardIcon} alt="Иконка сохранения" /> : null }
            <img className="card__image" src={props.image} alt={props.name} />
          </div>
          <div className="card__description">
            <h2 className="card__title">{props.name}</h2>
            <p className="card__duration">{convertingMinutes(props)}</p>
          </div>
        </div>
      ) : null}
      {location.pathname === '/saved-movies' ? (
        <div className="card__container">
          <div className="card__top_saved">
            <button
              type="button"
              className="card__button_del"
              // onClick={}
            ></button>
            <img className="card__image" src={props.image} alt={props.name} />
          </div>
          <div className="card__description">
            <h2 className="card__title">{props.name}</h2>
            <p className="card__duration">{convertingMinutes(props)}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default MoviesCard;
