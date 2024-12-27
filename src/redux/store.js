import { configureStore } from '@reduxjs/toolkit';
import { backetReducer } from './backet/slice';

export const store = configureStore({
  reducer: {
    backet: backetReducer.reducer,
  },
});
