import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { update_toDo } from '../features/ToDoSlice';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function ToDoDetails() {
  const { id } = useParams();
  const toDo = useSelector((state) => state.toDo.toDos).filter(
    (x) => x.id === id
  )[0];

  const [formData, setFormData] = useState({
    title: '',
    date: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const dispatch = useDispatch();

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(update_toDo({ id: id, update: formData }));
    setFormData({
      title: '',
      date: '',
    });
  }

  return (
    <>
      <section className='heading'>
        <h3>
          <Link to='/todo'>
            <FaArrowAltCircleLeft /> GO BACK
          </Link>
        </h3>
      </section>

      <section className='todo'>
        <div>id: {toDo.id}</div>
        <div>title: {toDo.title}</div>
        <div>date: {toDo.date}</div>
        <div>done: {toDo.done ? 'true' : 'false'}</div>
      </section>

      <section className='form'>
        <h1>Update:</h1>
        <form onSubmit={handleUpdate}>
          <div className='form-group'>
            <input
              name='name'
              value={formData.title}
              type='text'
              onChange={handleChange}
              placeholder='Enter new title'
              required
            />
          </div>
          <div className='form-group'>
            <input
              name='date'
              value={formData.date}
              type='date'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Update</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ToDoDetails;
