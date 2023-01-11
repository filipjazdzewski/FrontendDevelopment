import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MOVIE } from '../features/movies/MoviesSlice';

function AddMovie() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    productionYear: '',
    runTime: '',
    director: '',
  });

  const { title, productionYear, runTime, director } = formData;

  const dispatch = useDispatch();

  const directors = useSelector((state) => state.directors.directors);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ADD_MOVIE(formData));
    setFormData({
      id: uuidv4(),
      title: '',
      productionYear: '',
      runTime: '',
      director: '',
    });
    alert('Successfully added a movie!');
  }

  return (
    <>
      <section className='heading'>
        <h1>Add a new Movie</h1>
        <p>Please fill below</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='title'
              name='title'
              value={title}
              onChange={handleChange}
              placeholder='Enter Title'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              id='productionYear'
              name='productionYear'
              value={productionYear}
              min={1800}
              onChange={handleChange}
              placeholder='Enter Production Year'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              id='runTime'
              name='runTime'
              value={runTime}
              min={1}
              onChange={handleChange}
              placeholder='Enter Running Time'
              required
            />
          </div>
          <div className='form-group'>
            <select
              value={director}
              name='director'
              id='director'
              onChange={handleChange}
              required
            >
              <option value=''>Choose a director</option>
              {directors.map((director) => (
                <option
                  key={director.id}
                  value={`${director.firstName} ${director.lastName}`}
                >
                  {director.firstName} {director.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddMovie;
