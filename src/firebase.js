
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMujL6Zi5s5QKPkPLh1_g0mJIxCsXPcC0",
  authDomain: "trendicrypto-9e50c.firebaseapp.com",
  projectId: "trendicrypto-9e50c",
  storageBucket: "trendicrypto-9e50c.firebasestorage.app",
  messagingSenderId: "826923633571",
  appId: "1:826923633571:web:b6287ebef843613bc5a816"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
