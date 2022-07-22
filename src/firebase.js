import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABJLA0aiNy0ekdfJQo9xXBb0K-qDJPIaE",
  authDomain: "raider-50537.firebaseapp.com",
  projectId: "raider-50537",
  storageBucket: "raider-50537.appspot.com",
  messagingSenderId: "594118610383",
  appId: "1:594118610383:web:0a4e0d9f4607901fb656ba",
  measurementId: "G-3H22ZKTNLQ",
});

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { db, auth };
