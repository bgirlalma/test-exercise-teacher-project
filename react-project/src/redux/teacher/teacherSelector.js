import { createSelector } from "@reduxjs/toolkit";

const selectTeachers = state => state.teachers.teachers;

export const selectFilteredTeachers = createSelector([selectTeachers], teachers =>
  teachers.filter(teacher => teacher.isFavorite)
);