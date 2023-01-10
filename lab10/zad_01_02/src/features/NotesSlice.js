import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    add_note: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    delete_note: (state, action) => {
      state.notes = state.notes.filter((x) => x.id !== action.payload);
    },
    update_note: (state, action) => {
      state.notes = state.notes.map((x) =>
        x.id === action.payload.id
          ? {
              ...x,
              content: action.payload.update.content,
            }
          : x
      );
    },
  },
});

export const { add_note, delete_note, update_note } = notesSlice.actions;

export default notesSlice.reducer;
