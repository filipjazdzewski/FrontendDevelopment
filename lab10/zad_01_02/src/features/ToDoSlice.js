import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    toDos: [],
  },
  reducers: {
    add_toDo: (state, action) => {
      state.toDos = [...state.toDos, action.payload];
    },
    delete_toDo: (state, action) => {
      state.toDos = state.toDos.filter((x) => x.id !== action.payload);
    },
    finish_toDo: (state, action) => {
      state.toDos = state.toDos.map((x) =>
        x.id === action.payload ? { ...x, done: !x.done } : x
      );
    },
    update_toDo: (state, action) => {
      state.toDos = state.toDos.map((x) =>
        x.id === action.payload.id
          ? {
              ...x,
              name: action.payload.update.name,
              date: action.payload.update.date,
            }
          : x
      );
    },
  },
});

export const { add_toDo, delete_toDo, finish_toDo, update_toDo } =
  toDoSlice.actions;

export default toDoSlice.reducer;
