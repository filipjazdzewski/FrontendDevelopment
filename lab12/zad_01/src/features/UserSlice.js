import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const exampleUserList = [
  {
    id: uuidv4(),
    login: 'user1',
    email: 'user1@gmail.com',
    password: 'userone',
  },
  {
    id: uuidv4(),
    login: 'user2',
    email: 'user2@wp.pl',
    password: 'usertwo',
  },
  {
    id: uuidv4(),
    login: 'user3',
    email: 'user3@gmail.com',
    password: '3user3',
  },
  {
    id: uuidv4(),
    login: 'user4',
    email: 'user4@gmail.com',
    password: 'fourfourfour',
  },
];

const initialState = {
  users: [...exampleUserList],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    CREATE_USER: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    DELETE_USER: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    UPDATE_USER: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              login: action.payload.update.login,
              email: action.payload.update.email,
              password: action.payload.update.password,
            }
          : user
      );
    },
  },
});

export const { CREATE_USER, DELETE_USER, UPDATE_USER } = userSlice.actions;

export default userSlice.reducer;
