import React from 'react';
import './Portfolio.css';
import PortfolioIcon from '../../images/portfolioIcon.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a className="portfolio__link-item" href="https://github.com/MariaStarikova/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__link-subtitle">Статичный сайт</p>
            <img src={PortfolioIcon} alt="Иконка ссылки" className="portfolio__link-icon" />
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__link-item" href="https://mariastarikova.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className="portfolio__link-subtitle">Адаптивный сайт</p>
            <img src={PortfolioIcon} alt="Иконка ссылки" className="portfolio__link-icon" />
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__link-item" href="https://github.com/MariaStarikova/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            <p className="portfolio__link-subtitle">Одностраничное приложение</p>
            <img src={PortfolioIcon} alt="Иконка ссылки" className="portfolio__link-icon" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
