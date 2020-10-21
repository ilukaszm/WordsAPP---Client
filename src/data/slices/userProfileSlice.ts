import { createSlice } from '@reduxjs/toolkit';

interface ProfileData {
  email: string;
  avatarURL: string;
  gameSound: boolean;
  gamePoints: number;
  numberOfLevels: string;
}

interface InitialState {
  loading: boolean;
  hasErrors: boolean;
  profileData: ProfileData;
}

interface UserProfile {
  userProfile: InitialState;
}

const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  profileData: { email: '', avatarURL: '', gameSound: true, numberOfLevels: '5', gamePoints: 0 },
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

export const selectUserProfile = (state: UserProfile) => state.userProfile.profileData;
