// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDD2G5OoQyBGImKbFfJpbWth9Fe5bs67CY',
  authDomain: 'react-quiz-dev-4f457.firebaseapp.com',
  projectId: 'react-quiz-dev-4f457',
  storageBucket: 'react-quiz-dev-4f457.appspot.com',
  messagingSenderId: '981757080124',
  appId: '1:981757080124:web:134c039d0164040995c939'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
