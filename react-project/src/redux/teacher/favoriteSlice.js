import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    isLoader: false
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducer: {
        addFavorites(state, action) {
            const { teacherId } = action.payload;
              if (!state.favorites.includes(teacherId)) {
                state.favorites.push(teacherId);
              }
        },
        removeFavorites(state, action) {
            const { teacherId } = action.payload;
            state.favorites = state.favorites.filter(id => id !== teacherId);
         }
    }
})

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export const favoriteTeachers = favoriteSlice.reducer;