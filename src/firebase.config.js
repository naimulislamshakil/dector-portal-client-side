// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnwwJ0Qw8nVb8SZSkqM9I1vsrzz9hRhc",
  authDomain: "doctor-portal-419f4.firebaseapp.com",
  projectId: "doctor-portal-419f4",
  storageBucket: "doctor-portal-419f4.appspot.com",
  messagingSenderId: "772002707617",
  appId: "1:772002707617:web:5476a67f1aa7d4ac4318e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
