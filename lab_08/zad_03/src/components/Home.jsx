import React from 'react';
import photos from '../db/photos';
import { Link } from 'react-router-dom';

function Home() {
  const randomId = Math.floor(Math.random() * photos.length);

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>Welcome to our Gallery!</h1>
      <Link
        to={`/${randomId}`}
        className='italic text-purple-500 hover:text-rose-600'
      >
        See the photos
      </Link>
    </div>
  );
}

export default Home;
