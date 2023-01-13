import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_USER } from '../features/UserSlice';
import UserCard from '../components/UserCard';

function Users() {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  function deleteMovie(id) {
    dispatch(DELETE_USER(id));
  }

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
          {users
            .map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                login={user.login}
                email={user.email}
                handleDelete={() => deleteMovie(user.id)}
              />
            ))
            .reverse()}
        </div>
      </section>
    </div>
  );
}

export default Users;
