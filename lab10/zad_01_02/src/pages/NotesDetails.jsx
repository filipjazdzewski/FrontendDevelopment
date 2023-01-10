import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { update_note } from '../features/NotesSlice';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function NotesDetails() {
  const { id } = useParams();
  const notes = useSelector((state) => state.notes.notes).filter(
    (x) => x.id === id
  )[0];

  const [formData, setFormData] = useState({
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

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(update_note({ id: id, update: formData }));
    setFormData({
      content: '',
    });
  }

  return (
    <>
      <section className='heading'>
        <h3>
          <Link to='/notes'>
            <FaArrowAltCircleLeft /> GO BACK
          </Link>
        </h3>
      </section>

      <section className='todo'>
        <div>id: {notes.id}</div>
        <div>content: {notes.content}</div>
      </section>

      <section className='form'>
        <h1>Update:</h1>
        <form onSubmit={handleUpdate}>
          <div className='form-group'>
            <textarea
              type='text'
              id='content'
              name='content'
              style={{ resize: 'none', minHeight: '8rem' }}
              value={formData.content}
              onChange={handleChange}
              placeholder='Enter new content'
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

export default NotesDetails;
