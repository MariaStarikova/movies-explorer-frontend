import React, { useState, useEffect } from 'react';
import HeaderLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';
import { useForm } from '../../utils/useForm';
import './Login.css';

const Login = ({ handleLogin, isMessageForm }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true); //Состояние для заблокированной кнопки
  const { values, handleChange, isValid, errors } = useForm();

  //Функция сабмита формы
  function handleSubmit(e) {
    e.preventDefault();
    // console.log('email:', email);
    // console.log('password:', password);
    handleLogin(values.email, values.password);
  }

  //Проверка валидности введенных данных
  useEffect(() => {
    const { email, password } = values;
    if (isValid && (email || password)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isValid, values]);

  return (
    <section className="login page__login">
      <div className="login__header">
        <Link className="login__header-link" to="/">
          <img className="login__header-logo" alt="Логотип" src={HeaderLogo} />
        </Link>
        <h1 className="login__header-title">Рады видеть!</h1>
      </div>
      <div className="form login__form">
        <form className="form__user" onSubmit={handleSubmit} noValidate>
          <label className="form__name-input form__name-input_login">E-mail</label>
          <input
            className={
              !errors.email
                ? 'form__input form__input_login'
                : 'form__input form__input_login form__input_red'
            }
            type="email"
            name="email"
            placeholder="pochta@yandex.ru"
            value={values.email || ''}
            onChange={handleChange}
            required
          ></input>
          <span className="form__input-error form__input-error_login">{errors.email}</span>
          <label className="form__name-input form__name-input_login">Пароль</label>
          <input
            className={
              !errors.password
                ? 'form__input form__input_login'
                : 'form__input form__input_login form__input_red'
            }
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            value={values.password || ''}
            onChange={handleChange}
            required
          ></input>
          <span className="form__input-error form__input-error_login">{errors.password}</span>
          <span
            className={
              isMessageForm
                ? 'form__input-message form__input-message_login'
                : 'input__not-message input__not-message_login'
            }
          >
            {isMessageForm}
          </span>
          <button
            className="form__button-submit form__button-submit_login"
            type="submit"
            disabled={buttonDisabled}
          >
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
