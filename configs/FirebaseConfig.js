// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAloWl1htX7aGEPvc_ceJxy4lphTOuGn8",
  authDomain: "ai-travel-app-ef5c1.firebaseapp.com",
  projectId: "ai-travel-app-ef5c1",
  storageBucket: "ai-travel-app-ef5c1.firebasestorage.app",
  messagingSenderId: "1029488755157",
  appId: "1:1029488755157:web:44f770928cfe6a5f0abd5c",
  measurementId: "G-FDLY6QK4LF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);