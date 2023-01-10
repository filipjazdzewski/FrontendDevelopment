import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add_note } from '../../features/notesSlice';

export default function NoteForm() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    content: '',
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
    dispatch(add_note(formData));
    setFormData({
      id: uuidv4(),
      content: '',
    });
  }

  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <textarea
            type='text'
            id='content'
            name='content'
            style={{ resize: 'none', minHeight: '8rem' }}
            value={formData.content}
            onChange={handleChange}
            placeholder='Write a note'
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
