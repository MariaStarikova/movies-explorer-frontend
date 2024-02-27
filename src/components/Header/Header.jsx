import React from 'react';
import HeaderLogo from '../../images/headerLogo.svg';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
    const location = useLocation();

    return(
        <header className="header">
            {location.pathname === '/' ? (
            <div className="header__container">
                <img className="header__logo" alt="Логотип" src={HeaderLogo}/>
                <Navigation />
            </div>
            ) : null }
            {location.pathname === '/movies' ? (
            <div className="header__container_light">
                <img className="header__logo" alt="Логотип" src={HeaderLogo}/>
                <Navigation />
            </div>
            ) : null }
            {location.pathname === '/saved-movies' ? (
            <div className="header__container_light">
                <img className="header__logo" alt="Логотип" src={HeaderLogo}/>
                <Navigation />
            </div>
            ) : null }
            {location.pathname === '/profile' ? (
            <div className="header__container_light">
                <img className="header__logo" alt="Логотип" src={HeaderLogo}/>
                <Navigation />
            </div>
            ) : null }
        </header>
    )
}

export default Header