import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add_toDo } from '../../features/toDoSlice';

function ToDoForm() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    date: '',
    done: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(add_toDo(formData));
    setFormData({
      id: uuidv4(),
      title: '',
      date: '',
      done: false,
    });
  }

  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Enter title'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            className='form-control'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block'>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ToDoForm;
