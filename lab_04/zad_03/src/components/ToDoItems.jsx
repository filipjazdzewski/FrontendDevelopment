import { useState } from 'react';
import Header from './Header';
import ToDoForm from './ToDoForm';

function ToDoItems() {
  const [toDos, setToDos] = useState([]);

  const listToDoItems = () => {
    return toDos.map((toDo, index) => (
      <li key={index}>
        <h2>{toDo.content}</h2>
        {toDo.date}
      </li>
    ));
  };

  const addToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  return (
    <>
      <Header text='TODO LIST' />
      <div className='container'>
        <ToDoForm handleAdd={addToDo} />
        <ul>{listToDoItems()}</ul>
      </div>
    </>
  );
}

export default ToDoItems;
