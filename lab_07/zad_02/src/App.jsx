import React, { useState } from 'react';
import { Formik } from 'formik';

const users = [
  { login: 'pudzian', password: 'polska' },
  { login: 'admin', password: 'admin' },
];

function App() {
  const [loggedUser, setLoggedUser] = useState('');

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.login) {
          errors.login = 'Required';
        } else if (values.login.length < 3 || values.login.length > 20) {
          errors.login = '3-20 characters required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values) => {
        const user = users.find(
          (user) =>
            user.login === values.login && user.password === values.password
        );
        if (user) {
          setLoggedUser(user.login);
        } else alert('Incorrect login or password! Try again');
      }}
    >
      {loggedUser ? (
        <div>
          Logged in as <strong>{loggedUser}</strong>
          <br></br>
          <button onClick={() => setLoggedUser('')}>Logout</button>
        </div>
      ) : (
        (props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type='text'
              name='login'
              placeholder='login'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.login}
            />
            {props.errors.login && props.touched.login && (
              <p>{props.errors.login}</p>
            )}
            <input
              type='text'
              name='password'
              placeholder='password'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
            />
            {props.errors.password && props.touched.password && (
              <p>{props.errors.password}</p>
            )}
            <button type='submit'>Log in</button>
          </form>
        )
      )}
    </Formik>
  );
}

export default App;
