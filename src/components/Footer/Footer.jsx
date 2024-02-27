import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();

  return (
    <footer class="footer">
      {location.pathname === '/' ? (
        <div className="footer__container">
          <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div class="footer__nav">
            <span className="footer__author">&copy; 2024 Старикова Мария</span>
            <nav class="footer__links">
              <a
                class="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
              <a
                class="footer__link"
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
      {location.pathname === '/profile' ? <div className="footer__container_none"></div> : null}
      {location.pathname === '/signup' ? <div className="footer__container_none"></div> : null}
      {location.pathname === '/signin' ? <div className="footer__container_none"></div> : null}
    </footer>
  );
}

export default Footer;
