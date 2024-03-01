// import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ handleLogin }) => {
  const navigate = useNavigate();
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

  function handleClickOut() {
    navigate('/', { replace: true });
  }

  return (
    <section className="profile page__profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="form profile__form">
        <form
          className="form__profile"
          // onSubmit={handleSubmit}
        >
            <div className="form__input-block form__input-block_border">
          <label className="form__name-input form__name-input_profile">Имя</label>
          <input
            className="form__input form__input_profile"
            type="text"
            name="name"
            minLength="2"
            maxLength="200"
            placeholder="Иван"
            // value={email}
            // onChange={handleChangeEmail}
            required
          ></input>
          </div>
          <div className="form__input-block">
          <label className="form__name-input form__name-input_profile">E-mail</label>
          <input
            className="form__input form__input_profile"
            type="email"
            name="email"
            placeholder="pochta@yandex.ru"
            // value={password}
            // onChange={handleChangePassword}
            required
          ></input>
          </div>
          <span className="form__input-title-error"></span>
          <button className="form__button-edit" type="submit">
            Редактировать
          </button>
        </form>
        <button
          className="profile__out"
          type="button"
          onClick={handleClickOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
