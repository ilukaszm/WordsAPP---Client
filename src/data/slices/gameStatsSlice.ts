import { createSlice } from '@reduxjs/toolkit';

interface GameStats {
  gameStats: InitialState;
}

interface Players {
  email: string;
  avatarURL: string;
  gamePoints: number;
}

interface InitialState {
  loading: boolean;
  hasErrors: boolean;
  gameStatsData: Players[];
}

const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  gameStatsData: [],
};

const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState,
  reducers: {
    getGameStatsData: (state) => {
      state.loading = true;
    },
    getGameStatsDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.gameStatsData = payload;
      state.hasErrors = false;
    },
    getGameStatsDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const gameStatsReducer = gameStatsSlice.reducer;

export const {
  getGameStatsData,
  getGameStatsDataSuccess,
  getGameStatsDataFailure,
} = gameStatsSlice.actions;

export const selectGameStats = (state: GameStats) => state.gameStats.gameStatsData;