import React from 'react';
import photos from '../db/photos';
import { useParams, Link } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const idIsValid = (id) => {
    return (
      !!id &&
      !isNaN(parseInt(id)) &&
      parseInt(id) >= 0 &&
      parseInt(id) < photos.length
    );
  };

  const photo = idIsValid(id) ? photos[id] : undefined;

  return (
    <div>
      {!!photo ? (
        <div className='flex flex-col items-center pt-3'>
          <img
            src={photo.link}
            alt='image'
            className='rounded-3xl h-96 mb-3 px-3'
          />

          <div>Author: {photo.author}</div>
          <div>Created: {photo.date}</div>
          <div>describtion: {photo.describtion}</div>

          <Link
            to={`/${id}`}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 px-10 rounded'
          >
            Go Back
          </Link>
        </div>
      ) : (
        <div className='text-center pt-3'>
          <h1 className='text-4xl'>There is no image with that ID!</h1>
          <h1>Try id from 0 to {photos.length - 1}</h1>
        </div>
      )}
    </div>
  );
}

export default Details;
