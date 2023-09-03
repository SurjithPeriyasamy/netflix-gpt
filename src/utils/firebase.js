// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHK4JDrqNZGJboljUsseYwAtCI2QYQXi0",
  authDomain: "netflixgpt-23340.firebaseapp.com",
  projectId: "netflixgpt-23340",
  storageBucket: "netflixgpt-23340.appspot.com",
  messagingSenderId: "318429718937",
  appId: "1:318429718937:web:cffd3a855589ecb88bcb08",
  measurementId: "G-T13LMZLV3J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
