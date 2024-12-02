// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvF65n9GENcZ35gp_niHS_u5Gwrfntk5o",
  authDomain: "foodorder-a8bcf.firebaseapp.com",
  projectId: "foodorder-a8bcf",
  storageBucket: "foodorder-a8bcf.firebasestorage.app",
  messagingSenderId: "759605757160",
  appId: "1:759605757160:web:4054998a83623cb90f355d",
  measurementId: "G-ED5CNSFE1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)