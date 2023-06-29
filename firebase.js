// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcvAc5fklF41p1VYKfC0Wy5X6NfJ_8QVI",
  authDomain: "zencodezone.firebaseapp.com",
  projectId: "zencodezone",
  storageBucket: "zencodezone.appspot.com",
  messagingSenderId: "64990638920",
  appId: "1:64990638920:web:a32f55918c18e1fd4d797d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);