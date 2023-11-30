// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a620f.firebaseapp.com",
  projectId: "mern-auth-a620f",
  storageBucket: "mern-auth-a620f.appspot.com",
  messagingSenderId: "44862251802",
  appId: "1:44862251802:web:59069f56a44be556d782a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);