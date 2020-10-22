import { configureStore } from '@reduxjs/toolkit';

import { wordsReducer } from './slices/wordsSlice';
import { userProfileReducer } from './slices/userProfileSlice';
import { gameStatsReducer } from './slices/gameStatsSlice';

const store = configureStore({
  reducer: {
    words: wordsReducer,
    userProfile: userProfileReducer,
    gameStats: gameStatsReducer,
  },
});

export default store;
