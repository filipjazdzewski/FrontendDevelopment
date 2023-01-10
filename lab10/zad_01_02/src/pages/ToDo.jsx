import ToDoForm from '../components/todo/ToDoForm';
import ToDoList from '../components/todo/ToDoList';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function ToDo() {
  return (
    <>
      <section className='heading'>
        <h2>
          <Link to='/'>
            <FaHome /> BACK TO HOME
          </Link>
        </h2>
        <p>Create a new ToDo</p>
      </section>

      <section>
        <ToDoForm />
        <ToDoList />
      </section>
    </>
  );
}

export default ToDo;
