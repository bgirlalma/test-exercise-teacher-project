import { createSlice } from '@reduxjs/toolkit';
import { teachersList } from './teacherOperation';

const initialState = {
  teachers: [],
  isLoader: false,
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(teachersList.pending, state => {
        state.isLoader = true;
      })
      .addCase(teachersList.fulfilled, (state, action) => {
        state.isLoader = false;
        state.teachers = action.payload;
      })
      .addCase(teachersList.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      });
  },
});

export const teacherReducer = teacherSlice.reducer;
