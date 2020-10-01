import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { email: '', password: '' } as AuthSlice,
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
  },
});

export const authReducer = authSlice.reducer;
export const { authUser } = authSlice.actions;
