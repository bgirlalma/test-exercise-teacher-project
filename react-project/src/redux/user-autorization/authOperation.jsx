import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase';

export const userRegister = createAsyncThunk(
  'user/userRegister',
  async (user, thunkApi) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.name,
        user.email,
        user.password
      );
      await updateProfile(auth.createUser, { displayName: user.name });
      const { uid, displayName, email } = auth.currentUser;
      return { uid, displayName, email };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/userLogin',
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
  'user/userLogout',
  async (userId, thunkApi) => {
    try {
      const res = await signOut(auth);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
