import React from 'react';
import { useState } from 'react';
import user from './data/user';

function App() {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      loginData.login === user.login &&
      loginData.password === user.password
    ) {
      setError(false);
      setIsLogged(true);
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setLoginData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      {isLogged ? (
        <div>LOGGED IN!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='login'
            value={loginData.login}
            onChange={handleChange}
            placeholder='login'
            required
          />
          <input
            type='text'
            name='password'
            value={loginData.password}
            onChange={handleChange}
            placeholder='password'
            required
          />
          <button type='submit'>Submit</button>
          {error ? <div>Incorrect Login or Password!</div> : null}
        </form>
      )}
    </div>
  );
}

export default App;
