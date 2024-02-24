// import { createSlice } from "@reduxjs/toolkit"
// import { userLogin, userLogout, userRegister } from "./userApi"

// const initialState = {
//     user: {name: null, email: null, password: null,},
//       token: null,
//       isLoggIn: false,
//       isRefreshing: false,
//       isLoader: false,
// }

// const userSlice = createSlice({
//     name: "user",
//     initialState: initialState,
//     reducers: {},
//     extraReducers: builder => {
//         builder
//           .addCase(userRegister.pending, state => {
//             state.isLoader = true;
//           })
//           .addCase(userRegister.fulfilled, (state, action) => {
//             state.isLoader = false;
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLoggIn = true;
//           })
//           .addCase(userLogin.pending, state => {
//             state.isLoader = true;
//           })

//           .addCase(userLogin.fulfilled, (state, action) => {
//             state.isLoader = false;
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLoggIn = true;
//           })

//           .addCase(userLogout.fulfilled, state => {
//             state.isLoader = false;
//             state.user = { name: null, email: null, password: null };
//             state.token = null;
//             state.isLoggIn = false;
//           });
//     }
// })

// export const userReduser = userSlice.reducer;