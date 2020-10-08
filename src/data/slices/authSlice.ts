import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { email: '', password: '', avatarURL: '' } as AuthSlice,
  reducers: {
    authUser: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
      }>,
    ) => {
      state = action.payload;
    },
    authSocialUser: (
      state,
      action: PayloadAction<{
        email: string;
        avatarURL: string;
      }>,
    ) => {
      state = { ...action.payload, password: '' };
    },
  },
});

export const authReducer = authSlice.reducer;
export const { authUser, authSocialUser } = authSlice.actions;

export const selectUser = (state: any) => state.auth;
