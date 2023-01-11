import React from 'react';
import { Link } from 'react-router-dom';

function DirectorItem({ id, firstName, lastName, birthDate, handleDelete }) {
  return (
    <div className='card card-item'>
      <div className='card-title'>
        <h2>
          {firstName} {lastName}
        </h2>

        <p>Born: {birthDate}</p>
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
        <Link className='btn btn-card' to={`/directors/${id}/edit`}>
          Edit
        </Link>
        <Link className='btn btn-card' to={`/directors/${id}`}>
          ...More
        </Link>
      </div>
    </div>
  );
}

export default DirectorItem;
