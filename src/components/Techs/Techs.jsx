import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__description">
          <h3 className="techs__description-title">7 технологий</h3>
          <p className="techs__description-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className="techs__stack">
        <p className="techs__stack-item">HTML</p>
        <p className="techs__stack-item">CSS</p>
        <p className="techs__stack-item">JS</p>
        <p className="techs__stack-item">React</p>
        <p className="techs__stack-item">Git</p>
        <p className="techs__stack-item">Express.js</p>
        <p className="techs__stack-item">mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
