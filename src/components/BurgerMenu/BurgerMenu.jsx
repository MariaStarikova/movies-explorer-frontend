import React from 'react';
import './BurgerMenu.css';

function BurgerMenu(props) {
  return (
  <button className="burger__button" type="button" onClick={props.onOpenPopup}></button>
  );
}

export default BurgerMenu;
