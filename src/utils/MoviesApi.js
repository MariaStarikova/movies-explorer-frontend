export class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (!res.ok) {
        // console.log(res);
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

// export const moviesApi = new MoviesApi({
//   baseUrl: 'http://localhost:3000',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

