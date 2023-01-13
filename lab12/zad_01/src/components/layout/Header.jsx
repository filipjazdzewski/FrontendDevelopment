import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaUserPlus } from 'react-icons/fa';

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
          <Link to='/users/add'>
            <FaUserPlus /> Register User
          </Link>
        </li>
        <li>
          <Link to='/users'>
            <FaUsers /> Users
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
