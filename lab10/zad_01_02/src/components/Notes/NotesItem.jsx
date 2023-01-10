import { Link } from 'react-router-dom';

function NotesItem({ id, content, del }) {
  return (
    <div className='todo todo-item'>
      <div>
        <h2>{content}</h2>
      </div>

      <div className='todo-button-group'>
        <button className='btn btn-todo' onClick={del}>
          X
        </button>
        <Link className='btn btn-todo' to={`/notes/${id}`}>
          ...
        </Link>
      </div>
    </div>
  );
}

export default NotesItem;
