import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { mainApi } from '../../utils/MainApi.js';
import * as auth from '../../utils/auth.js';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  const [isOpenEdit, setIsOpenEdit] = useState(false); //переменная, отвечающая за открытие редактирования профиля
  const [isMessageSuccessProfile, setIsMessageSuccessProfile] = useState(''); //сообщение об успешной регистрации
  const [isMessageProfile, setIsMessageProfile] = useState(''); // сообщение об ошибках в профиле
  const [isMessageForm, setIsMessageForm] = useState(''); //сообщение об ошибках в Login и Register
  const location = useLocation();
  const [savedMovies, setSavedMovies] = useState([]);

  //Получение токена
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .checkToken(token)
        .then(user => {
          if (user) {
            setLoggedIn(true);
          }
        })
        .catch(err => {
          console.error(err);
          localStorage.clear();
        });
    }
  }, [navigate]);

  //Информация о текущем пользователе
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getInfoUser()
        .then(({ user }) => {
          setCurrentUser({
            name: user.name,
            email: user.email
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // Сброс сообщения об ошибке при каждом изменении маршрута
  useEffect(() => {
    setIsMessageForm('');
    setIsMessageSuccessProfile('');
  }, [location.pathname]);

  //Запрос к серверу на получение сохраненных фильмов
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then(moviesData => {
          setSavedMovies(moviesData);
          // console.log('savedMovies', moviesData);
        })
        .catch(error => {
          console.error(`Ошибка при получении данных: ${error}`);
        });
    }
  }, [loggedIn, setSavedMovies]);

  //Фукнция регистрации
  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        navigate('/movies', { replace: true });
      })
      .catch(err => {
        console.error(`Ошибка: ${err}`);
        setIsMessageForm();
        if (err === '409') {
          setIsMessageForm('Пользователь с таким email уже существует');
        } else {
          setIsMessageForm('Что-то пошло не так...');
        }
      });
  }

  //Функция входа
  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch(err => {
        console.error(`Ошибка: ${err}`);
        setIsMessageForm('Что-то пошло не так...');
      });
  }

  //Открытие редактирования профиля
  function handleOpenUpdateProfile() {
    setIsMessageProfile(''); //Сброс сообщения об ошибке
    setIsOpenEdit(true); // Открыть форму для редактирования
  }

  //Редактирование профиля
  function handleUpdateUser(name, email) {
    mainApi
      .updateUserInfo(name, email)
      .then(res => {
        setCurrentUser({
          name: name,
          email: email
        });
        setIsMessageSuccessProfile('Обновление данных прошло успешно');
        setIsOpenEdit(false);
      })
      .catch(err => {
        console.error(`Ошибка: ${err}`);
        setIsOpenEdit(true);
        if (err === '409') {
          setIsMessageProfile('Пользователь с таким email уже существует');
        } else {
          setIsMessageProfile('Что-то пошло не так...');
        }
      });
  }

  //Выход из профиля
  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('searchQuerySaved');
    localStorage.removeItem('isChecked');
    localStorage.removeItem('isCheckedSaved');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  //Функция добавления фильма в сохраненные
  function handleAddSavedMovie(movie) {
    // console.log('savedMovies', savedMovies);
    mainApi
      .addNewSavedMovie(movie)
      .then(newMovie => {
        setSavedMovies(prevSavedMovies => ({
          movies: [newMovie.movie, ...prevSavedMovies.movies]
        }));
      })
      .catch(err => {
        console.error(`Ошибка: ${err}`);
      });
  }

  //Функция удаления фильма из сохраненных
  function handleRemoveSavedMovie(movieId) {
    console.log('savedMovies', savedMovies);
    mainApi
      .removeSavedMovie(movieId)
      .then(() => {
        const updatedSavedMovies = savedMovies.movies.filter(
          savedMovie => savedMovie._id !== movieId
        );
        setSavedMovies({ movies: updatedSavedMovies });
      })
      .catch(err => {
        console.error(`Ошибка: ${err}`);
      });
  }

  //Открытие бургер-меню
  function handleBurgerClick() {
    setOpenPopup(true);
  }

  //Закрытие бургер-меню
  function closePopup() {
    setOpenPopup(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} onOpenPopup={handleBurgerClick} />
        <main>
          <Routes>
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} isMessageForm={isMessageForm} />}
            />
            <Route
              path="/signin"
              element={
                <Login
                  handleLogin={handleLogin}
                  loggedIn={loggedIn}
                  isMessageForm={isMessageForm}
                />
              }
            />
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  handleAddSavedMovie={handleAddSavedMovie}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  handleRemoveSavedMovie={handleRemoveSavedMovie}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut}
                  loggedIn={loggedIn}
                  currentUser={currentUser}
                  isMessageProfile={isMessageProfile}
                  isOpenEdit={isOpenEdit}
                  handleOpenUpdateProfile={handleOpenUpdateProfile}
                  isMessageSuccessProfile={isMessageSuccessProfile}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Popup isOpen={isOpenPopup} onClose={closePopup} />
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
