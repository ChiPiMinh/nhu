// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9h9kTm3dWswOAkyeczdPWzUQdNw8riSM",
  authDomain: "sotay-20e8c.firebaseapp.com",
  databaseURL: "https://sotay-20e8c-default-rtdb.firebaseio.com",
  projectId: "sotay-20e8c",
  storageBucket: "sotay-20e8c.firebasestorage.app",
  messagingSenderId: "90618795716",
  appId: "1:90618795716:web:2b047cce89c3e8e10e9b91",
  measurementId: "G-BCB3W7BH58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
