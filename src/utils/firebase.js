// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41NrJXLFPjfdlwPGH3AFzTFtAmO55XLI",
  authDomain: "netflix-gpt-f400c.firebaseapp.com",
  projectId: "netflix-gpt-f400c",
  storageBucket: "netflix-gpt-f400c.appspot.com",
  messagingSenderId: "497093445527",
  appId: "1:497093445527:web:2399d4e48fffeea0f7a6d2",
  measurementId: "G-V1S0PQPMV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
