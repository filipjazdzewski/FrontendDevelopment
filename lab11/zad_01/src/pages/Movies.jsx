import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_MOVIE } from '../features/movies/MoviesSlice';
import MovieItem from '../components/movies/MovieItem';

function Movies() {
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  function deleteMovie(id) {
    dispatch(DELETE_MOVIE(id));
  }

  return (
    <div>
      <section className='heading'>
        <p>Movies DataBase</p>
        <Link className='btn btn-block' to='/movies/add'>
          Add a new Movie
        </Link>
      </section>

      <section>
        <h1>Movies:</h1>
        <div>
          {movies
            .map((movie) => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                productionYear={movie.productionYear}
                runTime={movie.runTime}
                director={movie.director}
                handleDelete={() => deleteMovie(movie.id)}
              />
            ))
            .reverse()}
        </div>
      </section>
    </div>
  );
}

export default Movies;
