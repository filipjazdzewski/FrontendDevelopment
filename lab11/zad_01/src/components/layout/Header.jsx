import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaUsers } from 'react-icons/fa';

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <FaHome /> Home
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/movies'>
            <FaFilm /> Movies
          </Link>
        </li>
        <li>
          <Link to='/directors'>
            <FaUsers /> Directors
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
