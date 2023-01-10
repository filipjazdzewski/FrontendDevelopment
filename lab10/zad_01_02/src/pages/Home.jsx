import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Welcome to the home page</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/todo' className='btn btn-block'>
        <FaRegCalendarCheck /> VIEW TODO'S
      </Link>
      <Link to='/notes' className='btn btn-block'>
        <FaRegFileAlt /> VIEW NOTES
      </Link>
    </>
  );
}

export default Home;
