// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDoc, updateDoc } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK6VrLr-Am2WkP4iKOW_DkJkAyBgV6GuE",
  authDomain: "blog-app-91901.firebaseapp.com",
  projectId: "blog-app-91901",
  storageBucket: "blog-app-91901.firebasestorage.app",
  messagingSenderId: "152367982357",
  appId: "1:152367982357:web:935d5b80efeef486186b1c",
  measurementId: "G-KB29PEQPXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
