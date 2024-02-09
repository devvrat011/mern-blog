// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2439e.firebaseapp.com",
  projectId: "mern-blog-2439e",
  storageBucket: "mern-blog-2439e.appspot.com",
  messagingSenderId: "442846028259",
  appId: "1:442846028259:web:38be8b324bc228d63000d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);