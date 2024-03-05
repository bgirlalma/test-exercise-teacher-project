import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    isLoader: false
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducer: {
        addFavorites(state, {payload}){
            state.favorites.push(payload)
        },
        removeFavorites(state, {payload }) {
             state.favorites = state.favorites.filter((e) => e !== payload)
         }
    }
})

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export const favoriteTeachers = favoriteSlice.reducer;