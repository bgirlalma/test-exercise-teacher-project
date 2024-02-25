import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin, userLogout } from './authOperation.jsx';

const initialState = {
  user: { name: null, email: null, password: null },
  isLoggIn: false,
  isLoader: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoader = true;
      })
      .addCase(userLogin.pending, state => {
        state.isLoader = true;
      })
      .addCase(userLogout.pending, state => {
        state.isLoader = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.uid = action.payload.uid;
        state.isLoader = false;
        state.isLoggIn = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.uid = action.payload.uid;
        state.isLoader = false;
        state.isLoggIn = true;
      })
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null, password: null };
        state.isLoader = false;
        state.isLoggIn = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      });
  },
});

export const authReduser = userSlice.reducer;
