import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useForm } from '../../utils/useForm.js';
import './Profile.css';

const Profile = ({
  onUpdateUser,
  onSignOut,
  isMessageProfile,
  isOpenEdit,
  handleOpenUpdateProfile,
  isMessageSuccessProfile
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [buttonDisabled, setButtonDisabled] = useState(true); //Состояние для заблокированной кнопки
  const { values, handleChange, resetForm, isValid, errors } = useForm();

  //Установка значений текущего пользователя
  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [currentUser, resetForm]);

  //Сабмит формы
  function handleSubmit(e) {
    e.preventDefault();
    // console.log("values.name, values.email", values.name, values.email);
    onUpdateUser(values.name, values.email);
  }

  //Проверка валидности введенных значений
  useEffect(() => {
    const { name, email } = values;
    if (isValid && (currentUser.name !== name || currentUser.email !== email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isValid, values, currentUser]);

  // console.log('errors', errors);

  return (
    <section className="profile page__profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="form profile__form">
        <form className="form__profile" onSubmit={handleSubmit} noValidate>
          <div className="form__input-block form__input-block_border">
            <label className="form__name-input form__name-input_profile">Имя</label>
            <input
              className="form__input form__input_profile"
              type="text"
              name="name"
              minLength="2"
              maxLength="200"
              placeholder="Иван"
              value={values.name || ''}
              onChange={handleChange}
              disabled={!isOpenEdit}
              required
            ></input>
          </div>
          <span className="form__input-error form__input-error_profile">{errors.name}</span>
          <div className="form__input-block">
            <label className="form__name-input form__name-input_profile">E-mail</label>
            <input
              className="form__input form__input_profile"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              value={values.email || ''}
              onChange={handleChange}
              disabled={!isOpenEdit}
              required
            ></input>
          </div>
          <span className="form__input-error form__input-error_profile">{errors.email}</span>
          {isOpenEdit && (
            <>
              <span
                className={
                  isMessageProfile
                    ? 'form__input-message form__input-message_profile'
                    : 'input-title-error_success'
                }
              >
                {isMessageProfile}
              </span>
              <button
                className="form__button-submit form__button-submit_profile"
                type="submit"
                disabled={buttonDisabled}
              >
                Сохранить
              </button>
            </>
          )}
          {!isOpenEdit && (
            <>
              <span className={!isOpenEdit ? 'form__input-success' : 'input-title-error_success'}>
                {isMessageSuccessProfile}
              </span>
              <button className="form__button-edit" type="button" onClick={handleOpenUpdateProfile}>
                Редактировать
              </button>
              <button className="profile__out" type="button" onClick={onSignOut}>
                Выйти из аккаунта
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Profile;
