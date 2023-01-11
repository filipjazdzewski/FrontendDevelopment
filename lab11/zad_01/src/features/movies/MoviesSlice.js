import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const exampleMovieList = [
  {
    id: uuidv4(),
    title: 'Memento',
    productionYear: 2000,
    runTime: 113,
    director: 'Christopher Nolan',
  },
  {
    id: uuidv4(),
    title: 'A Quiet Place',
    productionYear: 2018,
    runTime: 90,
    director: 'John Krasinski',
  },
  {
    id: uuidv4(),
    title: 'Parasyte',
    productionYear: 2019,
    runTime: 132,
    director: 'Bong Joon-ho',
  },
  {
    id: uuidv4(),
    title: 'The Dark Knight',
    productionYear: 2008,
    runTime: 152,
    director: 'Christopher Nolan',
  },
  {
    id: uuidv4(),
    title: 'Heat',
    productionYear: 1995,
    runTime: 170,
    director: 'Michael Mann',
  },
];

const initialState = {
  movies: [...exampleMovieList],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    ADD_MOVIE: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    DELETE_MOVIE: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { ADD_MOVIE, DELETE_MOVIE } = moviesSlice.actions;

export default moviesSlice.reducer;
