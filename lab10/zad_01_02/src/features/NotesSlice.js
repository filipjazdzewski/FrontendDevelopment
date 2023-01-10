import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notesList: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default notesSlice.reducer;
