import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';

function App() {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};

  const [registeredUser, setRegisteredUser] = useState(user);

  function submitRegister(data) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        gender: data.gender,
        nationality: data.nationality,
      })
    );
    setRegisteredUser(JSON.parse(localStorage.getItem('user')));
  }

  function deleteUser() {
    localStorage.removeItem('user');
    setRegisteredUser({});
  }

  return (
    <div>
      {Object.keys(registeredUser).length !== 0 ? (
        <UserProfile
          registeredUser={registeredUser}
          handleDelete={deleteUser}
        />
      ) : (
        <RegisterForm submitRegister={(data) => submitRegister(data)} />
      )}
    </div>
  );
}

export default App;
