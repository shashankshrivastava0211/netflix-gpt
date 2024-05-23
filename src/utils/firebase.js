// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFK6RYEN8bB4jFTa7bG0aUROjJdckiVak",
  authDomain: "netflixgpt-3cc06.firebaseapp.com",
  projectId: "netflixgpt-3cc06",
  storageBucket: "netflixgpt-3cc06.appspot.com",
  messagingSenderId: "1046348149745",
  appId: "1:1046348149745:web:0e270aae9c9430e44b8a50",
  measurementId: "G-78XGTZRCF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();