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
    <section className="login">
      <div className="login__header">
        <img className="login__logo" alt="Логотип" src={HeaderLogo} />
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <div className="form__container">
        <form
          className="form__user"
          // onSubmit={handleSubmit}
        >
          <label className="form__name-input">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            // value={email}
            // onChange={handleChangeEmail}
            required
          ></input>
          <span className="form__input-error"></span>
          <label className="form__name-input">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            // value={password}
            // onChange={handleChangePassword}
            required
          ></input>
          <span className="form__input-error"></span>
          <span className="input-title-error"></span>
          <button className="form__button-submit" type="submit">
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
