// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsjIpDUZ9Nj4TlN560by5739LAwuEOSsU",
  authDomain: "ai-trip-planner-8d977.firebaseapp.com",
  projectId: "ai-trip-planner-8d977",
  storageBucket: "ai-trip-planner-8d977.firebasestorage.app",
  messagingSenderId: "152306970009",
  appId: "1:152306970009:web:65db62efd5fd255e183708",
  measurementId: "G-012VDDG5KF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);