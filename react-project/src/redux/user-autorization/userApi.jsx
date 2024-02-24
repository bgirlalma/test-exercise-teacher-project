// import firebase from 'firebase/app';
// import 'firebase/auth'

// export const userRegister = async (email, password) => {
//   try {
//     const res = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password);
//     return res.user;
//   } catch (error) {
//     throw error;
//   }
// };

// export const userLogin = async (email, password) => {
//   try {
//     const res = await firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password);
//     return res.user;
//   } catch (error) {
//     throw error;
//   }
// };

// export const userLogout = async () => {
//   try {
//     await firebase.auth().signOut();
//   } catch (error) {
//     throw error;
//   }
// };
