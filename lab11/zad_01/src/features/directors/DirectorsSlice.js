import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const exampleDirectorList = [
  {
    id: uuidv4(),
    firstName: 'Christopher',
    lastName: 'Nolan',
    birthDate: '1970-07-30',
  },
  {
    id: uuidv4(),
    firstName: 'Michael',
    lastName: 'Mann',
    birthDate: '1943-02-05',
  },
  {
    id: uuidv4(),
    firstName: 'John',
    lastName: 'Krasinski',
    birthDate: '1979-10-20',
  },
  {
    id: uuidv4(),
    firstName: 'Bong',
    lastName: 'Joon-ho',
    birthDate: '1969-09-14',
  },
];

const initialState = {
  directors: [...exampleDirectorList],
};

export const directorsSlice = createSlice({
  name: 'directors',
  initialState,
  reducers: {
    ADD_DIRECTOR: (state, action) => {
      state.directors = [...state.directors, action.payload];
    },
    DELETE_DIRECTOR: (state, action) => {
      state.directors = state.directors.filter(
        (director) => director.id !== action.payload
      );
    },
    UPDATE_DIRECTOR: (state, action) => {
      state.directors = state.directors.map((director) =>
        director.id === action.payload.id
          ? {
              ...director,
              firstName: action.payload.update.firstName,
              lastName: action.payload.update.lastName,
              birthDate: action.payload.update.birthDate,
            }
          : director
      );
    },
  },
});

export const { ADD_DIRECTOR, DELETE_DIRECTOR, UPDATE_DIRECTOR } =
  directorsSlice.actions;

export default directorsSlice.reducer;
