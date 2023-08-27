// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb3DrQV4pbICu_qEJZuGV7frpkZhh9-zA",
  authDomain: "netflixgpt-123.firebaseapp.com",
  projectId: "netflixgpt-123",
  storageBucket: "netflixgpt-123.appspot.com",
  messagingSenderId: "828911752233",
  appId: "1:828911752233:web:3227c14877bf644844b838",
  measurementId: "G-SP24MSSCYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
