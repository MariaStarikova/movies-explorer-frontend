import React from 'react';
import './AboutMe.css';
import MePhoto from '../../images/photo.jpeg';

function AboutMe() {
  return (
    <section className="me" id="about-me">
      <h2 className="me__title">Студент</h2>
      <div className="me__description">
        <div className="me__description-content">
          <h3 className="me__description-title">Мария</h3>
          <p className="me__description-subtitle">Фронтенд-разработчик, 24 года</p>
          <p className="me__description-text">
            Я родилась в Оренбургской области, живу в Екатеринбурге, закончила архитектурно-строительный факультет по специальности "Теплогазоснабжение и вентиляция", работала проектировщиком. Прошла обучение по разработке, совершенствуюсь в знаниях и мечтаю найти классную работу.
          </p>
          <a
            className="me__description-git"
            href="https://github.com/MariaStarikova"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={MePhoto} alt="Фото студента" className="me__description-img" />
      </div>
    </section>
  );
}

export default AboutMe;
