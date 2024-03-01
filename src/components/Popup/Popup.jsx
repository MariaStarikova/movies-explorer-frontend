import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconAvatar from '../../images/IconAvatarLight.svg';
import './Popup.css';

function Popup(props) {
  const location = useLocation();

  return (
    <div className={`popup ${props.isOpen ? `popup_opened` : ''}`}>
      <button className="popup__close-button" onClick={props.onClose}></button>
      <div className="popup__container">
        <Link className={location.pathname !== '/' ? "popup__main" : "popup__main popup__main_border"} to="/">
          Главная
        </Link>
        <Link className={location.pathname !== '/movies' ? "popup__movies" : "popup__movies popup__movies_border"} to="/movies">
          Фильмы
        </Link>
        <Link className={location.pathname !== '/saved-movies' ? "popup__saved-movies" : "popup__saved-movies popup__saved-movies_border"} to="/saved-movies">
          Сохраненные фильмы
        </Link>
        <Link className="popup__profile" to="/profile">
          <p className={location.pathname !== '/profile' ? "popup__subtitle" : "popup__subtitle popup__subtitle_border"}>Аккаунт</p>
          <img className="popup__btn" src={IconAvatar} alt="Картинка человечка" />
        </Link>
      </div>
    </div>
  );
}

export default Popup;
