import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/ToDoSlice.js';
import notesReducer from '../features/NotesSlice.js';

export default configureStore({
  reducer: {
    toDo: toDoReducer,
    notes: notesReducer,
  },
});
