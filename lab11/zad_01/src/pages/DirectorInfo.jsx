import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DirectorInfo() {
  const { id } = useParams();
  const director = useSelector((state) => state.directors.directors).filter(
    (director) => director.id === id
  )[0];

  const { firstName, lastName, birthDate } = director;

  return (
    <>
      <section className='heading'>
        <h1>Director Info</h1>
      </section>

      <section className='card card-item card-details'>
        <ul className='text-end'>
          <li>First Name:</li>
          <li>Last Name:</li>
          <li>Birt Date:</li>
        </ul>
        <ul className='text-start'>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{birthDate}</li>
        </ul>
      </section>
    </>
  );
}

export default DirectorInfo;
