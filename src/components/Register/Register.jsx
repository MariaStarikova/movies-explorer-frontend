// import React, { useState } from 'react';
import React from 'react';
import HeaderLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = ({ handleRegister }) => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   function handleChangeEmail(e) {
  //     setEmail(e.target.value);
  //   }

  //   function handleChangePassword(e) {
  //     setPassword(e.target.value);
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     handleRegister(email, password);
  //   }

  return (
    <section className="register">
      <div className="register__header">
        <img className="register__logo" alt="Логотип" src={HeaderLogo} />
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <div className="form__container">
        <form
          className="form__user"
          // onSubmit={handleSubmit}
        >
          <label className="form__name-input">Имя</label>
          <input
            className="form__input"
            type="text"
            // value={email}
            // onChange={handleChangeEmail}
            required
          ></input>
          <span className="form__input-error"></span>
          <label className="form__name-input">E-mail</label>
          <input
            className="form__input"
            type="email"
            // value={email}
            // onChange={handleChangeEmail}
            required
          ></input>
          <span className="form__input-error"></span>
          <label className="form__name-input">Пароль</label>
          <input
            className="form__input"
            type="password"
            minLength="2"
            maxLength="200"
            // value={password}
            // onChange={handleChangePassword}
            required
          ></input>
          <span className="form__input-error"></span>
          <span className="input-title-error"></span>
          <button className="form__button-submit_register" type="submit">
            Зарегистрироваться
          </button>
          <div className="form__login">
            <p className="form__login-text">Уже зарегистрированы?</p>
            <Link className="form__login-link" to="/signin">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
