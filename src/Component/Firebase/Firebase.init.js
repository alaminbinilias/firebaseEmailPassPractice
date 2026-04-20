// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ZqToZYJRlyXG4ABb9KVx8qR09UfS10w",
  authDomain: "email-pass-auth-3789c.firebaseapp.com",
  projectId: "email-pass-auth-3789c",
  storageBucket: "email-pass-auth-3789c.firebasestorage.app",
  messagingSenderId: "184065724841",
  appId: "1:184065724841:web:5c6c832a298a30888a74b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);