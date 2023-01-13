import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_DIRECTOR } from '../features/directors/DirectorsSlice';

function EditDirector() {
  const { id } = useParams();
  const directorData = useSelector((state) => state.directors.directors).filter(
    (director) => director.id === id
  )[0];

  const [formData, setFormData] = useState({
    firstName: directorData.firstName,
    lastName: directorData.lastName,
    birthDate: directorData.birthDate,
  });

  const { firstName, lastName, birthDate } = formData;

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
    dispatch(UPDATE_DIRECTOR({ id: id, update: formData }));
    alert('Successfully edited a director!');
    navigate('/directors');
  }

  return (
    <>
      <section className='heading'>
        <h1>Edit director</h1>
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
            <button className='btn btn-block'>Edit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EditDirector;
