export class MainApi {
    constructor(options) {
      this.baseUrl = options.baseUrl;
      this.headers = options.headers;
    }
  
    getInfoUser() {
    const jwt = localStorage.getItem("jwt");
      return fetch(`${this.baseUrl}/users/me`, {
        headers: {
         Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        },
      }).then(this._checkResponse);
    }
  
    updateUserInfo(name, email) {
       const jwt = localStorage.getItem("jwt");
      return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
           Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, email
          })
      }).then(this._checkResponse);
    }

    getSavedMovies() {
        const jwt = localStorage.getItem("jwt");
          return fetch(`${this.baseUrl}/movies`, {
            headers: {
            Authorization: `Bearer ${jwt}`,
              'Content-Type': 'application/json'
            },
          }).then(this._checkResponse);
        }

    addNewSavedMovie(movieData) {
           const jwt = localStorage.getItem("jwt");
          return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: {
               Authorization: `Bearer ${jwt}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            country: movieData.country,
            director: movieData.director,
            duration: movieData.duration,
            year: movieData.year,
            description: movieData.description,
            image: `https://api.nomoreparties.co/${movieData.image.url}`,
            trailerLink: movieData.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movieData.image.url}`,
            movieId: movieData.id,
            nameRU: movieData.nameRU,
            nameEN: movieData.nameEN,
            }),
          }).then(this._checkResponse);
        }
  
    removeSavedMovie(movieId) {
       const jwt = localStorage.getItem("jwt");
      return fetch(`${this.baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
           Authorization: `Bearer ${jwt}`
        }
      }).then(this._checkResponse);
    }
  
    _checkResponse(res) {
      if (!res.ok) {
        console.log('res', res);
        return Promise.reject(`${res.status}`);
      }
      return res.json();
    }
  }
  
  export const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
//   export const api = new Api({
//     baseUrl: 'https://api.mstar.students.nomoredomainsmonster.ru',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });