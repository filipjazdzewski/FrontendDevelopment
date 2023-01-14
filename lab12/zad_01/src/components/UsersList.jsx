import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_USER } from '../features/UserSlice';
import UserCard from '../components/UserCard';

function UsersList({ users, del }) {
  const dispatch = useDispatch();

  function deleteMovie(id) {
    dispatch(DELETE_USER(id));
  }

  return (
    <div>
      {users
        .map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            login={user.login}
            email={user.email}
            handleDelete={del && (() => deleteMovie(user.id))}
          />
        ))
        .reverse()}
    </div>
  );
}

export default UsersList;
