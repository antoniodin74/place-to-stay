// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWJUmENpDpH6RZs14y5OyePg4mWdnZD5U",
    authDomain: "travel-bf11f.firebaseapp.com",
    projectId: "travel-bf11f",
    storageBucket: "travel-bf11f.appspot.com",
    messagingSenderId: "231719245860",
    appId: "1:231719245860:web:79af1fc16034dd437e60b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
