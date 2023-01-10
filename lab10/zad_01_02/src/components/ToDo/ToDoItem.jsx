import { Link } from 'react-router-dom';

function ToDoItem({ title, date, id, done, del, check }) {
  return (
    <div
      className='todo todo-item'
      style={done ? { background: '#90ee90' } : {}}
    >
      <div>
        <h2>{title}</h2>
        <div>
          <p>{date}</p>
        </div>
      </div>

      <div className='todo-button-group'>
        <button className='btn btn-todo' onClick={check}>
          {done ? <div>&#11150;</div> : <div>&#10003;</div>}
        </button>
        <button className='btn btn-todo' onClick={del}>
          X
        </button>
        <Link className='btn btn-todo' to={`/todo/${id}`}>
          ...
        </Link>
      </div>
    </div>
  );
}

export default ToDoItem;
