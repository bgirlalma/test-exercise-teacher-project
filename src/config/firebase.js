// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: 'teacher-project-1d375',
  storageBucket: 'teacher-project-1d375.appspot.com',
  messagingSenderId: '115585297503',
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app)



