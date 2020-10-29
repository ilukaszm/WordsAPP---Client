import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  hasError: boolean;
}

interface CommonStateSlice {
  common: InitialState;
}

const initialState: InitialState = {
  loading: false,
  hasError: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setRequest: (state) => {
      state.loading = true;
    },
    setRequestSuccess: (state) => {
      state.loading = false;
      state.hasError = false;
    },
    setRequestFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const commonReducer = commonSlice.reducer;

export const { setRequest, setRequestSuccess, setRequestFailure } = commonSlice.actions;

export const selectCommonState = (state: CommonStateSlice) => state.common;
