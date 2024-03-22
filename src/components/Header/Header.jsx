import React from 'react';
import HeaderLogo from '../../images/headerLogo.svg';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const location = useLocation();

  return (
    <header className="header page__header">
      {location.pathname === '/' ? (
        <div className="header__container">
          <Link className="header__link" to="/">
            <img className="header__logo" alt="Логотип" src={HeaderLogo} />
          </Link>
          <Navigation loggedIn={props.loggedIn} onOpenPopup={props.onOpenPopup} />
        </div>
      ) : null}
      {location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile' ? (
        <div className="header__container header__container_light">
          <Link className="header__link" to="/">
            <img className="header__logo" alt="Логотип" src={HeaderLogo} />
          </Link>
          <Navigation loggedIn={props.loggedIn} onOpenPopup={props.onOpenPopup} />
        </div>
      ) : null}
    </header>
  );
}

export default Header;
