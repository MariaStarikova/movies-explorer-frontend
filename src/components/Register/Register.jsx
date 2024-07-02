import React, { useState, useEffect } from 'react';
import HeaderLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';
import { useForm } from '../../utils/useForm';
import './Register.css';

const Register = ({ handleRegister, isMessageForm }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true); //Состояние для заблокированной кнопки
  const { values, handleChange, isValid, errors } = useForm();

  //Функция сабмита формы
  function handleSubmit(e) {
    e.preventDefault();
    // if (!isValid) {
    //   setButtonDisabled(true);
    // } else {
    //   setButtonDisabled(false);
    handleRegister(values.name, values.email, values.password);
    // }
  }

  //Проверка валидности введенных данных
  useEffect(() => {
    const { name, email, password } = values;
    if (isValid && (name || email || password)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isValid, values]);

  console.log('errors', errors);

  return (
    <section className="register page__register">
      <div className="register__header">
        <Link className="register__header-link" to="/">
          <img className="register__header-logo" alt="Логотип" src={HeaderLogo} />
        </Link>
        <h1 className="register__header-title">Добро пожаловать!</h1>
      </div>
      <div className="form register__form">
        <form className="form__user" onSubmit={handleSubmit} noValidate>
          <label className="form__name-input form__name-input_register">Имя</label>
          <input
            className={
              !errors.name
                ? 'form__input form__input_register'
                : 'form__input form__input_register form__input_red'
            }
            type="text"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            placeholder="Иван"
            required
          ></input>
          <span className="form__input-error form__input-error_register">{errors.name}</span>
          <label className="form__name-input form__name-input_register">E-mail</label>
          <input
            className={
              !errors.email
                ? 'form__input form__input_register'
                : 'form__input form__input_register form__input_red'
            }
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            placeholder="pochta@yandex.ru"
            required
          ></input>
          <span className="form__input-error form__input-error_register">{errors.email}</span>
          <label className="form__name-input form__name-input_register">Пароль</label>
          <input
            className={
              !errors.password
                ? 'form__input form__input_register'
                : 'form__input form__input_register form__input_red'
            }
            type="password"
            name="password"
            minLength="5"
            maxLength="200"
            placeholder="Надежный пароль"
            value={values.password || ''}
            onChange={handleChange}
            required
          ></input>
          <span className="form__input-error form__input-error_register">{errors.password}</span>
          <span
            className={
              isMessageForm
                ? 'form__input-message form__input-message_register'
                : 'input__not-message input__not-message_register'
            }
          >
            {isMessageForm}
          </span>
          <button
            className="form__button-submit form__button-submit_register"
            type="submit"
            disabled={buttonDisabled}
          >
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
