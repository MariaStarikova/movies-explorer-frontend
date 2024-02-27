import React from 'react';
import './AboutMe.css';
import MePhoto from '../../images/me-photo.png';

function AboutMe() {
  return (
    <section className="me" id="about-me">
      <h2 className="me__title">Студент</h2>
      <div className="me__description">
        <div className="me__description-content">
          <h3 className="me__description-title">Виталий</h3>
          <p className="me__description-subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="me__description-text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="me__description-git" href="https://github.com/MariaStarikova" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img src={MePhoto} alt="Фото студента" className="me__description-img" />
      </div>
    </section>
  );
}

export default AboutMe;
