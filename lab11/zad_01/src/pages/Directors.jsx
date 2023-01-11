import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  DELETE_DIRECTOR,
  UPDATE_DIRECTOR,
} from '../features/directors/DirectorsSlice';
import DirectorItem from '../components/directors/DirectorItem';

function Movies() {
  const directors = useSelector((state) => state.directors.directors);

  const dispatch = useDispatch();

  function deleteDirector(id) {
    dispatch(DELETE_DIRECTOR(id));
  }

  return (
    <div>
      <section className='heading'>
        <p>Directors DataBase</p>
        <Link className='btn btn-block' to='/directors/add'>
          Add a new Director
        </Link>
      </section>

      <section>
        <h1>Directors:</h1>
        <div>
          {directors
            .map((director) => (
              <DirectorItem
                key={director.id}
                id={director.id}
                firstName={director.firstName}
                lastName={director.lastName}
                birthDate={director.birthDate}
                handleDelete={() => deleteDirector(director.id)}
              />
            ))
            .reverse()}
        </div>
      </section>
    </div>
  );
}

export default Movies;
