// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnBbfAMxgTA7JEleyGBXvpuhLLaIpdnjA",
  authDomain: "mern-art-inventory.firebaseapp.com",
  projectId: "mern-art-inventory",
  storageBucket: "mern-art-inventory.appspot.com",
  messagingSenderId: "427498025960",
  appId: "1:427498025960:web:c02dbddb7d17915ecf2a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;