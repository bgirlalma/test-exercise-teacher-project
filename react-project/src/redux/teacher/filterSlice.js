import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languages: '',
  level: '',
  price: '',
};


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
             const { languages, level, price } = action.payload;
             state.languages =
               languages !== undefined ? languages : state.languages;
             state.level = level !== undefined ? level : state.level;
             state.price = price !== undefined ? price : state.price;
        }
    }
})


export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;