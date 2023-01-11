import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from '../features/movies/MoviesSlice';
import DirectorsReducer from '../features/directors/DirectorsSlice';

export default configureStore({
  reducer: {
    movies: MoviesReducer,
    directors: DirectorsReducer,
  },
});
