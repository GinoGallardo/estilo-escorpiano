// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs54SSH4DmdNfkPfeY1g5uTfA4pNmeAhs",
  authDomain: "estilo-escorpiano.firebaseapp.com",
  projectId: "estilo-escorpiano",
  storageBucket: "estilo-escorpiano.firebasestorage.app",
  messagingSenderId: "191676601114",
  appId: "1:191676601114:web:cf7af49863c8797b3792a3",
  measurementId: "G-86ZQKQZBX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
