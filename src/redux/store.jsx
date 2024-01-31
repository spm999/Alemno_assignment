// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './slice';

const store = configureStore({
  reducer: {
    mySlice: myReducer,
  },
});

export default store;
