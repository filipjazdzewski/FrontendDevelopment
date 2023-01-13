import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_USER } from '../features/UserSlice';

function AddUser() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    login: '',
    email: '',
    password: '',
  });

  const { login, email, password } = formData;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(CREATE_USER(formData));
    setFormData({
      id: uuidv4(),
      login: '',
      email: '',
      password: '',
    });
    alert('Successfully added a user!');
    navigate('/users');
  }

  return (
    <>
      <section className='heading'>
        <h1>Register new User</h1>
        <p>Please fill below</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='login'
              name='login'
              value={login}
              onChange={handleChange}
              placeholder='Enter Login'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
              placeholder='Enter E-mail'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder='Enter Password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Register</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddUser;
