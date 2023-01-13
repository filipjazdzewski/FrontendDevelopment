import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ id, login, email, handleDelete }) {
  return (
    <div className='card card-item'>
      <div className='card-title'>
        <h2>{login}</h2>
        <p>{email}</p>
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
        <Link className='btn btn-card' to={`/users/${id}/edit`}>
          Edit
        </Link>
        <Link className='btn btn-card' to={`/users/${id}`}>
          ...More
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
