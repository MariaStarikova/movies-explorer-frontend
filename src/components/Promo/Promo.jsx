import React from 'react';
import './Promo.css';
import PromoLogo from '../../images/promoLogo.svg';

function Promo() {
    return(
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__logo" alt="Логотип" src={PromoLogo} />
        </section>
    )
}

export default Promo