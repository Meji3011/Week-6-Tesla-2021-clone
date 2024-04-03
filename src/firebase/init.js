// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvBWSoRnNJELsfjd74Up8AOfNGxQOSlHM",
  authDomain: "tesla-2021-clone.firebaseapp.com",
  projectId: "tesla-2021-clone",
  storageBucket: "tesla-2021-clone.appspot.com",
  messagingSenderId: "781503584612",
  appId: "1:781503584612:web:faa73be0c5e4f5e0770271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();