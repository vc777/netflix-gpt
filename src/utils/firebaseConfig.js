// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4X4ui1GDhfaqvtikLr3fsD_sg9E0rTSs",
  authDomain: "netflixgpt-95426.firebaseapp.com",
  projectId: "netflixgpt-95426",
  storageBucket: "netflixgpt-95426.firebasestorage.app",
  messagingSenderId: "954237311838",
  appId: "1:954237311838:web:a28e88d3c9f9e8d85fcdcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics =  getAnalytics(app);
export const auth = getAuth();