import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/authSlice';
import { wordsReducer } from './slices/wordsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    words: wordsReducer,
  },
});

export default store;
