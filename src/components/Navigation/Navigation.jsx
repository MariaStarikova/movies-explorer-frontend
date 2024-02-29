import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconAvatarLight from '../../images/IconAvatarLight.svg';
import IconAvatar from '../../images/IconAvatar.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Navigation.css';

function Navigation( props ) {
    const location = useLocation();

    // const [isOpenPopup, setOpenPopup] = useState(false);
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
    <div className="navigation">
        {props.loggedIn && location.pathname === '/' ? (
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
       {!props.loggedIn && location.pathname === '/' ? (
        <div className="navigation__container">
      <Link className="navigation__signup" to="/signup">
      Регистрация
      </Link>
      <Link className="navigation__signin" to="/signin">
      Войти
      </Link>
      </div>
       ) : null }
       {location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ? (
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

  return (
  <div className="navigation">
        {location.pathname === '/' ? (
        <div className="navigation__container_mobile">
      <BurgerMenu onOpenPopup={props.onOpenPopup}/>
      </div>
       ) : null }
       {/* {!props.loggedIn && location.pathname === '/' ? (
        <div className="navigation__container">
      <Link className="navigation__signup" to="/signup">
      Регистрация
      </Link>
      <Link className="navigation__signin" to="/signin">
      Войти
      </Link>
      </div>
       ) : null } */}
       {location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ? (
        <div className="navigation__container_mobile">
        <BurgerMenu onOpenPopup={props.onOpenPopup}/>
        </div>
       ) : null }
    </div>
  )
}

export default Navigation;