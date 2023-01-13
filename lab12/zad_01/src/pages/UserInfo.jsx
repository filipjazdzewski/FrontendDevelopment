import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserInfo() {
  const { id } = useParams();
  const user = useSelector((state) => state.users.users).filter(
    (user) => user.id === id
  )[0];

  const { login, email, password } = user;

  return (
    <>
      <section className='heading'>
        <h1>User Info</h1>
      </section>

      <section className='card card-item card-details'>
        <ul className='text-end'>
          <li>Login:</li>
          <li>E-mail:</li>
          <li>Password:</li>
        </ul>
        <ul className='text-start'>
          <li>{login}</li>
          <li>{email}</li>
          <li>{password}</li>
        </ul>
      </section>
    </>
  );
}

export default UserInfo;
