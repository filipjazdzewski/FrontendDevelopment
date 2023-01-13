import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice';

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
