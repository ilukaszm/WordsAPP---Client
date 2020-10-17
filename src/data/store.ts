import { configureStore } from '@reduxjs/toolkit';

import { wordsReducer } from './slices/wordsSlice';
import { userProfileReducer } from './slices/userProfileSlice';

const store = configureStore({
  reducer: {
    words: wordsReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
