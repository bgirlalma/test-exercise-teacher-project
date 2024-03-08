import { createSlice } from '@reduxjs/toolkit';
import { addTeacherFavorites, removeTeacherFavorites, teachersList } from './teacherOperation';

const initialState = {
  teachers: [],
  isLoader: false,
  filter: "",
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
      })
      .addCase(addTeacherFavorites.pending, state => {
        state.isLoader = true;
      })
      .addCase(addTeacherFavorites.fulfilled, (state, action) => {
        state.isLoader = false;
        const { teacherId } = action.payload;
        if (!state.teachers.some(teacher => teacher.id === teacherId)) {
          state.teachers.push({ id: teacherId });
        }
      })
      .addCase(addTeacherFavorites.rejected, (state, action) => {
      state.error = action.payload
      })
      .addCase(removeTeacherFavorites.pending, state => {
        state.isLoader = true;
      })
      .addCase(removeTeacherFavorites.fulfilled, (state, action) => {
        const { teacherId } = action.payload;
        state.teachers = state.teachers.filter(teacher => teacher.id !== teacherId)
      })
      .addCase(removeTeacherFavorites.rejected, (state, action) => {
      state.error = action.payload
    })
  },
});

export const teacherReducer = teacherSlice.reducer;
