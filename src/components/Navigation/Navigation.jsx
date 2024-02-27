import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconAvatarLight from '../../images/IconAvatarLight.svg';
import IconAvatar from '../../images/IconAvatar.svg';
import './Navigation.css';

function Navigation() {
    const location = useLocation();

  return (
    <div className="navigation">
        {location.pathname === '/' ? (
        <div className="navigation__container">
      <Link className="navigation__movies" to="/movies">
        Фильмы
      </Link>
      <Link className="navigation__saved_movies" to="/saved-movies">
        Сохраненные фильмы
      </Link>
      <Link className="navigation__profile" to="/profile">
        <p className="navigation__subtitle">Аккаунт</p>
        <img className="navigation__btn" src={IconAvatar} alt="Картинка человечка"/>
      </Link>
      </div>
       ) : null }
       {location.pathname === '/movies' ? (
        <div className="navigation__container">
      <Link className="navigation__movies" to="/movies">
        Фильмы
      </Link>
      <Link className="navigation__saved_movies" to="/saved-movies">
        Сохраненные фильмы
      </Link>
      <Link className="navigation__profile" to="/profile">
        <p className="navigation__subtitle">Аккаунт</p>
        <img className="navigation__btn_light" src={IconAvatarLight} alt="Картинка человечка"/>
      </Link>
      </div>
       ) : null }
       {location.pathname === '/saved-movies' ? (
        <div className="navigation__container">
      <Link className="navigation__movies" to="/movies">
        Фильмы
      </Link>
      <Link className="navigation__saved_movies" to="/saved-movies">
        Сохраненные фильмы
      </Link>
      <Link className="navigation__profile" to="/profile">
        <p className="navigation__subtitle">Аккаунт</p>
        <img className="navigation__btn_light" src={IconAvatarLight} alt="Картинка человечка"/>
      </Link>
      </div>
       ) : null }
       {location.pathname === '/profile' ? (
        <div className="navigation__container">
      <Link className="navigation__movies" to="/movies">
        Фильмы
      </Link>
      <Link className="navigation__saved_movies" to="/saved-movies">
        Сохраненные фильмы
      </Link>
      <Link className="navigation__profile" to="/profile">
        <p className="navigation__subtitle">Аккаунт</p>
        <img className="navigation__btn_light" src={IconAvatarLight} alt="Картинка человечка"/>
      </Link>
      </div>

       ) : null }
    </div>
  );
}

export default Navigation;