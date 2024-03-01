// import React, { useState } from 'react';
import React from 'react';
import HeaderLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ handleLogin }) => {
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
  //     // console.log('email:', email);
  //     // console.log('password:', password);
  //     handleLogin({ password, email });
  //   }

  return (
    <section className="login page__login">
      <div className="login__header">
        <Link className="login__header-link" to="/">
          <img className="login__header-logo" alt="Логотип" src={HeaderLogo} />
        </Link>
        <h1 className="login__header-title">Рады видеть!</h1>
      </div>
      <div className="form login__form">
        <form
          className="form__user"
          // onSubmit={handleSubmit}
        >
          <label className="form__name-input form__name-input_login">E-mail</label>
          <input
            className="form__input form__input_login"
            type="email"
            name="email"
            placeholder="pochta@yandex.ru"
            // value={email}
            // onChange={handleChangeEmail}
            required
          ></input>
          <span className="form__input-error"></span>
          <label className="form__name-input form__name-input_login">Пароль</label>
          <input
            className="form__input form__input_login"
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            // value={password}
            // onChange={handleChangePassword}
            required
          ></input>
          <span className="form__input-error"></span>
          <span className="form__input-title-error"></span>
          <button className="form__button-submit form__button-submit_login" type="submit">
            Войти
          </button>
          <div className="form__register">
            <p className="form__register-text">Ещё не зарегистрированы?</p>
            <Link className="form__register-link" to="/signup">
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
