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
    <section className="register page__register">
      <div className="register__header">
        <Link className="register__header-link" to="/">
          <img className="register__header-logo" alt="Логотип" src={HeaderLogo} />
        </Link>
        <h1 className="register__header-title">Добро пожаловать!</h1>
      </div>
      <div className="form register__form">
        <form
          className="form__user"
          // onSubmit={handleSubmit}
        >
          <label className="form__name-input form__name-input_register">Имя</label>
          <input
            className="form__input form__input_register"
            type="text"
            // value={email}
            // onChange={handleChangeEmail}
            minLength="2"
            maxLength="30"
            placeholder="Иван"
            required
          ></input>
          <span className="form__input-error"></span>
          <label className="form__name-input form__name-input_register">E-mail</label>
          <input
            className="form__input form__input_register"
            type="email"
            // value={email}
            // onChange={handleChangeEmail}
            placeholder="pochta@yandex.ru"
            required
          ></input>
          <span className="form__input-error"></span>
          <label className="form__name-input form__name-input_register">Пароль</label>
          <input
            className="form__input form__input_register"
            type="password"
            minLength="2"
            maxLength="200"
            placeholder="Надежный пароль"
            // value={password}
            // onChange={handleChangePassword}
            required
          ></input>
          <span className="form__input-error">Что-то пошло не так...</span>
          <span className="form__input-title-error"></span>
          <button className="form__button-submit form__button-submit_register" type="submit">
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
