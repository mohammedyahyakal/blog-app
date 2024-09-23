// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXDZDHvRiS5zxI0NHljTW7isidySl1V0s",
  authDomain: "mern-blog-dd87b.firebaseapp.com",
  projectId: "mern-blog-dd87b",
  storageBucket: "mern-blog-dd87b.appspot.com",
  messagingSenderId: "203002897781",
  appId: "1:203002897781:web:ee0c286522c6b5f0175f3c",
  measurementId: "G-CY0F1PBKXX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
