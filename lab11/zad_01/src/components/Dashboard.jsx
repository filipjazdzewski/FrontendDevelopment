import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './movies/MovieItem';

function Dashboard() {
  // Three latest movies by the year they were produced
  const latestMovies = useSelector((state) => state.movies.movies)
    .slice() // I had to do this because otherwise it was throwing an error when I tried to sort the list
    .sort((a, b) => b.productionYear - a.productionYear)
    .slice(0, 3);

  return (
    <div>
      {latestMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          productionYear={movie.productionYear}
          runTime={movie.runTime}
          director={movie.director}
          handleDelete={false}
        />
      ))}
    </div>
  );
}

export default Dashboard;
