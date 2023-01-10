import NotesForm from '../components/notes/NotesForm';
import NotesList from '../components/notes/NotesList';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Notes() {
  return (
    <>
      <section className='heading'>
        <h2>
          <Link to='/'>
            <FaHome /> BACK TO HOME
          </Link>
        </h2>
        <p>Create a new Note</p>
      </section>

      <section>
        <NotesForm />
        <NotesList />
      </section>
    </>
  );
}

export default Notes;
