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
  'userAuth/loginUser',
  async (body, thunkAPI) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      console.log('Пользователь успешно вошел в систему:', res);
      await updateProfile(auth.currentUser, { displayName: body.name });

      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
      console.error('Ошибка входа в систему:', error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'userAuth/logoutUser',
  async (userId, thunkAPI) => {
    try {
      const res = await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
