import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config/firebase';

export const registerUser = createAsyncThunk(
  'userAuth/registerUser',
  async (body, thunkAPI) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        body.email,
        body.password,
        body.name
      );
      await updateProfile(auth.currentUser, { displayName: body.name });

      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'userAuth/userLogin',
  async (user, thunkApi) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      await updateProfile(auth.currentUser, { displayName: user.name });
      const { uid, displayName, email } = user.currentUser;
      return { uid, displayName, email };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'userAuth/userLogout',
  async (userId, thunkApi) => {
    try {
      const res = await signOut(auth);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
