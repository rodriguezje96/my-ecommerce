// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvNZ7qbym_UxudWgt2984mwrNvFOW5Dls",
    authDomain: "heavy-store----coderhouse.firebaseapp.com",
    projectId: "heavy-store----coderhouse",
    storageBucket: "heavy-store----coderhouse.appspot.com",
    messagingSenderId: "1047419312061",
    appId: "1:1047419312061:web:b0ca34fe4aed38f44ee4d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)