// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGTvRdF7e7AELwqmsK8OyB8FGlY6zvTQg",
  authDomain: "whatsapp-2-760e7.firebaseapp.com",
  projectId: "whatsapp-2-760e7",
  storageBucket: "whatsapp-2-760e7.appspot.com",
  messagingSenderId: "505011259591",
  appId: "1:505011259591:web:3f6edab21e53e38914d6e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };