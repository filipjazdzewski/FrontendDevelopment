import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_DIRECTOR } from '../features/directors/DirectorsSlice';

function AddDirector() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    firstName: '',
    lastName: '',
    birthDate: '',
  });

  const { firstName, lastName, birthDate } = formData;

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ADD_DIRECTOR(formData));
    setFormData({
      id: uuidv4(),
      firstName: '',
      lastName: '',
      birthDate: '',
    });
    alert('Successfully added a director!');
  }

  return (
    <>
      <section className='heading'>
        <h1>Add a new Director</h1>
        <p>Please fill below</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleChange}
              placeholder='Enter First Name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={handleChange}
              placeholder='Enter Last Name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='date'
              id='birthDate'
              name='birthDate'
              value={birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddDirector;
