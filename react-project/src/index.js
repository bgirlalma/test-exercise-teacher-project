import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from './components/global.styled';
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAmQjTlH7zf9Tc_kneK9KW-u-UipXko80M',
  authDomain: 'teacher-app-cb18f.firebaseapp.com',
  projectId: 'teacher-app-cb18f',
  storageBucket: 'teacher-app-cb18f.appspot.com',
  messagingSenderId: '1044018537013',
  appId: '1:1044018537013:web:964607b41befb0c10f077c',
  measurementId: 'G-FRRSD9S560',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-exercise-teacher-project">
      <GlobalStyled/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

