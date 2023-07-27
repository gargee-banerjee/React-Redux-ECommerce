// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAG-6j_JErWoMSEIlLcFAaZHjZnV4BYRs",
  authDomain: "e-commerce-c7bbf.firebaseapp.com",
  projectId: "e-commerce-c7bbf",
  storageBucket: "e-commerce-c7bbf.appspot.com",
  messagingSenderId: "633710650052",
  appId: "1:633710650052:web:592721222c142cc267df91",
  measurementId: "G-RNKP094H61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
