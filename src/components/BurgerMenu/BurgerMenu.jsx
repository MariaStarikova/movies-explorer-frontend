import React from 'react';
import './BurgerMenu.css';

function BurgerMenu(props) {
  return <button className="burger" type="button" onClick={props.onOpenPopup}></button>;
}

export default BurgerMenu;
