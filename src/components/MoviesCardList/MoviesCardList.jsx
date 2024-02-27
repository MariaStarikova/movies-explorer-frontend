import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  return (
    <div className="cards">
      {/* {loading ? (
          <Preloader />
        ) : ( */}
      <section className="cards__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </section>
      <button
        type="button"
        className="cards__button"
        // onClick={handleClickMoreMovies}
      >
        Ещё
      </button>

      {/* )} */}
    </div>
  );
}

export default MoviesCardList;
