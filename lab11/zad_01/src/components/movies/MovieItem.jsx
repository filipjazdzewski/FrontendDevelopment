import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({
  id,
  title,
  productionYear,
  runTime,
  director,
  handleDelete,
}) {
  return (
    <div className='card card-item'>
      <div className='card-title'>
        <h2>{title}</h2>

        <p>
          {productionYear} &#183; {runTime}m
        </p>
      </div>

      <div className='card-button-group'>
        {handleDelete && (
          <button
            className='btn btn-card btn-delete'
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        )}
        <Link className='btn btn-card' to={`/movies/${id}`}>
          ...More
        </Link>
      </div>
    </div>
  );
}

export default MovieItem;
