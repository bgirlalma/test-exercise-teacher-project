import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: { languages: '', levels: '', price: '' },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
        console.log(
          'Reducer: setFilter action dispatched with payload:',
          action.payload
        );
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
