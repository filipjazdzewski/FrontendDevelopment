import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UsersList from '../components/UsersList';

function Users() {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <section className='heading'>
        <p>Users DataBase</p>
        <Link className='btn btn-block' to='/users/add'>
          Add a new User
        </Link>
      </section>

      <section>
        <h1>List of Users:</h1>
        <div>
          <UsersList users={users} del={true} />
        </div>
      </section>
    </div>
  );
}

export default Users;
