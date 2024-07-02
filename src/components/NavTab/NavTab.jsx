import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <div className="navtab__links">
        <a className="navtab__link" href="#project">О проекте</a>
        <a className="navtab__link" href="#techs">Технологии</a>
        <a className="navtab__link" href="#about-me">Студент</a>
      </div>
    </nav>
  );
}

export default NavTab;

