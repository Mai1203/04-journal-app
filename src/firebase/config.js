// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpOBAGWlTKeow85Cr9PLO-0xWD5-SDXSU",
  authDomain: "journal-bf079.firebaseapp.com",
  projectId: "journal-bf079",
  storageBucket: "journal-bf079.firebasestorage.app",
  messagingSenderId: "903795456689",
  appId: "1:903795456689:web:784e2f7fc7ef65f4870090"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);