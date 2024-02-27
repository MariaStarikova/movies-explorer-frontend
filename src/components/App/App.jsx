import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
// import {initialCards} from '../../utils/constants.js';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
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
        <Route 
        path="/" 
        element={
        <Main 
        />} 
        />
        <Route 
        path="/movies"
        element={<Movies />}
        />
        <Route 
        path="/saved-movies"
        element={<SavedMovies />}
        />
        <Route 
        path="/profile"
        element={<Profile />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
