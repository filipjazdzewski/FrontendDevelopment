import ToDoForm from '../components/ToDo/ToDoForm';
import ToDoList from '../components/ToDo/ToDoList';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import React from 'react';

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
