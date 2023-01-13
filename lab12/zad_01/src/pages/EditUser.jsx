import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_USER } from '../features/UserSlice';

function EditUser() {
  const { id } = useParams();
  const userData = useSelector((state) => state.users.users).filter(
    (user) => user.id === id
  )[0];

  const [formData, setFormData] = useState({
    login: userData.login,
    email: userData.email,
    password: userData.password,
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
    dispatch(UPDATE_USER({ id: id, update: formData }));
    alert('Successfully edited a user!');
    navigate('/users');
  }

  return (
    <>
      <section className='heading'>
        <h1>Edit User</h1>
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
              type='texemailt'
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
            <button className='btn btn-block'>Edit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EditUser;
