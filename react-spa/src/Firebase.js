// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA7jZaCs7k1PyN5H4KgS-EdkI6gnq0Np2s',
  authDomain: 'windows-store-by-foneca.firebaseapp.com',
  databaseURL: 'https://windows-store-by-foneca-default-rtdb.firebaseio.com',
  projectId: 'windows-store-by-foneca',
  storageBucket: 'windows-store-by-foneca.appspot.com',
  messagingSenderId: '118145512826',
  appId: '1:118145512826:web:578a9e7505ccedddb152c3',
  measurementId: 'G-HRGYFPMGZK',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig).firebaseApp;
const firestore = getFirestore(firebaseApp);

export default firestore;
