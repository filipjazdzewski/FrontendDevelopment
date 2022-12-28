import React, { useState } from 'react';
import photos from '../db/photos';
import { useParams, Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function Photo() {
  const [rateValue, setRateValue] = useState(0);
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
  const avgRating = idIsValid(id)
    ? photo.rating.reduce((a, b) => a + b, 0) / photo.rating.length
    : undefined;

  const handleRating = (event) => {
    event.preventDefault();
    photos[id].rating.push(rateValue);
    setRateValue(0);
  };

  return (
    <div>
      {!!photo ? (
        <div className='flex flex-col items-center pt-3'>
          <img
            src={photo.link}
            alt='image'
            className='rounded-3xl h-96 mb-3 px-3'
          />

          <Rating
            onChange={(event, newValue) => {
              setRateValue(newValue);
            }}
            precision={0.5}
            value={rateValue}
            size='large'
            emptyIcon={<StarIcon fontSize='inherit' />}
          />

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-1 px-4 rounded-full'
            onClick={handleRating}
          >
            Submit
          </button>

          <div>Avg. rating: {avgRating.toFixed(2)}</div>

          <Link
            to={`/${id}/details`}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 px-10 rounded'
          >
            Details
          </Link>

          <div className='inline-flex my-8'>
            {parseInt(id) !== 0 && (
              <Link
                to={`/${parseInt(id) - 1}`}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-l'
              >
                Prev
              </Link>
            )}
            {parseInt(id) !== photos.length - 1 && (
              <Link
                to={`/${parseInt(id) + 1}`}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-r'
              >
                Next
              </Link>
            )}
          </div>
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

export default Photo;
