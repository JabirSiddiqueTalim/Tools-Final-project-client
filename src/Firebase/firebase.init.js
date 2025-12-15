import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtVVOVoIAHZ23tyAs4dE3pCyaKj0kMeQc",
  authDomain: "tools-final-projectt.firebaseapp.com",
  projectId: "tools-final-projectt",
  storageBucket: "tools-final-projectt.firebasestorage.app",
  messagingSenderId: "425547840908",
  appId: "1:425547840908:web:8cf518e110c772290daaa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);