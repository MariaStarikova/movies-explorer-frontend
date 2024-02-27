import React from 'react';
import './MoviesCard.css';
import CardImage from '../../images/cardImage.jpeg';
import CardIcon from '../../images/iconSaved.svg';

function MoviesCard() {
    return(
        <section className="card">
     <div className="card__container">
                <button
                    type="button"
                    className="card__button"
                    // onClick={handleClickFavorite}
                >Сохранить</button>
                <img className="card__icon" src={CardIcon}
                 alt="Иконка сохранения"
                />
                <button
                    type="button"
                    className="card__button_del"
                    // onClick={handleClickFavorite}
                ></button>
                <img className="card__image" src={CardImage}
                 alt="movie.nameRU"
                />
            </div>
            <div className="card__description">
                <h2 className="card__title">33 слова о дизайне</h2>
                <p className="card__duration">1ч 17м</p>
            </div>
        </section>
    )
}

export default MoviesCard;