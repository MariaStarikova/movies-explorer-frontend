import React from 'react';
import { Link } from 'react-router-dom';
import IconAvatar from '../../images/IconAvatarLight.svg';
import './Popup.css';

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? `popup_opened` : ''}`}>
      <button className="popup__close-button" onClick={props.onClose}></button>
      <div className="popup__container">
        <Link className="popup__main" to="/">
          Главная
        </Link>
        <Link className="popup__movies" to="/movies">
          Фильмы
        </Link>
        <Link className="popup__saved-movies" to="/saved-movies">
          Сохраненные фильмы
        </Link>
        <Link className="popup__profile" to="/profile">
          <p className="popup__subtitle">Аккаунт</p>
          <img className="popup__btn" src={IconAvatar} alt="Картинка человечка" />
        </Link>
      </div>
    </div>
  );
}

export default Popup;
