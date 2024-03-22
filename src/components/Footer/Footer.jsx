import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer page__footer">
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ? (
        <div className="footer__container">
          <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className="footer__nav">
            <span className="footer__author">&copy; 2024 Старикова Мария</span>
            <nav className="footer__links">
              <a
                className="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
              <a
                className="footer__link"
                href="https://github.com/MariaStarikova"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      ) : null}
      {location.pathname === '/profile' ||
      location.pathname === '/signup' ||
      location.pathname === '/signin' ? (
        <div className="footer__container footer__container_none"></div>
      ) : null}
    </footer>
  );
}

export default Footer;
