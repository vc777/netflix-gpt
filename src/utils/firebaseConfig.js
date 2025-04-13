// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9xORtDQqpSeSJri-0JubTqypMDDKedZA",
  authDomain: "netflixgpt-cd131.firebaseapp.com",
  projectId: "netflixgpt-cd131",
  storageBucket: "netflixgpt-cd131.firebasestorage.app",
  messagingSenderId: "955775622649",
  appId: "1:955775622649:web:f216f26b8970cdaeab7128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics =  getAnalytics(app);
export const auth = getAuth();