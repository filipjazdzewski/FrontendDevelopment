import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieInfo() {
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.movies).filter(
    (movie) => movie.id === id
  )[0];

  const { title, productionYear, runTime, director } = movie;

  return (
    <>
      <section className='heading'>
        <h1>Movie Details</h1>
      </section>

      <section className='card card-item card-details'>
        <ul className='text-end'>
          <li>Title:</li>
          <li>Production Year:</li>
          <li>Run Time:</li>
          <li>Director:</li>
        </ul>
        <ul className='text-start'>
          <li>{title}</li>
          <li>{productionYear}</li>
          <li>{runTime}m</li>
          <li>{director}</li>
        </ul>
      </section>
    </>
  );
}

export default MovieInfo;
