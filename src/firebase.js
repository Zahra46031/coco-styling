// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_pMEZp9HXH7HQgI8ICVi8NvhX1zEVB44",
  authDomain: "coco-styling.firebaseapp.com",
  projectId: "coco-styling",
  storageBucket: "coco-styling.firebasestorage.app",
  messagingSenderId: "391544237315",
  appId: "1:391544237315:web:3b4d55a06b072828eb4d36",
  measurementId: "G-KVQ46FTLPJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);