import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(false);

  function handleBurgerClick() {
    setOpenPopup(true);
  }

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
              element={
                <Register
                // handleRegister={handleRegister}
                // isRegisterSuccess={isRegisterSuccess}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                // handleLogin={handleLogin}
                // loggedIn={loggedIn}
                />
              }
            />
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies loading={loading} />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
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
