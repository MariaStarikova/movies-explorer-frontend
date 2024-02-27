// import React, { useState } from 'react';
import React from 'react';
import './Profile.css';

const Profile = ({ handleLogin }) => {
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
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="form__container">
        <form
          className="form__profile"
          // onSubmit={handleSubmit}
        >
            <div className="form__input-block form__input-block_border">
          <label className="form__name-input_profile">Имя</label>
          <input
            className="form__input_profile"
            type="text"
            name="name"
            // value={email}
            // onChange={handleChangeEmail}
            required
          ></input>
          </div>
          <div className="form__input-block">
          <label className="form__name-input_profile">E-mail</label>
          <input
            className="form__input_profile"
            type="email"
            name="email"
            // value={password}
            // onChange={handleChangePassword}
            required
          ></input>
          </div>
          <span className="input-title-error"></span>
          <button className="form__button-submit_profile" type="submit">
            Редактировать
          </button>
        </form>
        <button
          className="profile__out"
          type="button"
          // onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
