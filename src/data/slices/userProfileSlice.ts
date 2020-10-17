import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  hasErrors: boolean;
  profileData: any[];
}

const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  profileData: [],
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserProfileData: (state) => {
      state.loading = true;
    },
    getUserProfileDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.profileData = payload;
      state.hasErrors = false;
    },
    getUserProfileDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const userProfileReducer = userProfileSlice.reducer;

export const {
  getUserProfileData,
  getUserProfileDataSuccess,
  getUserProfileDataFailure,
} = userProfileSlice.actions;

export const selectUserProfile = (state: any) => state.userProfile.profileData;
