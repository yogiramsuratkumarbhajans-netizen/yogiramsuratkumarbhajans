// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "yrsk-divya-vani-english.firebaseapp.com",
  projectId: "yrsk-divya-vani-english",
  storageBucket: "yrsk-divya-vani-english.firebasestorage.app",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
