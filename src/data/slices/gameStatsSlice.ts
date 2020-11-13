import { createSlice } from '@reduxjs/toolkit';

interface Players {
  player: string;
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

interface GlobalState {
  gameStats: InitialState;
}

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

export const selectGameStats = (state: GlobalState) => state.gameStats.gameStatsData;
export const selectGameStatsLoading = (state: GlobalState) => state.gameStats.loading;
export const selectGameStatsErrors = (state: GlobalState) => state.gameStats.hasErrors;
