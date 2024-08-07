export const BASE_URL = 'http://localhost:3000';
// export const BASE_URL = 'https://api.movies.nomoredomainswork.ru';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  }).then(res => checkResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({ email, password })
  }).then(res => checkResponse(res));
};

export const checkToken = token => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => checkResponse(res));
};

const checkResponse = res => {
  if (!res.ok) {
    console.error(`Ошибка ${res.status}`);
    return Promise.reject(`${res.status}`);
  }
  return res.json();
};