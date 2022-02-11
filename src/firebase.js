import { initializeApp } from "firebase/app";
import { getFirestore,  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZakncDi1XFw9eitaRGGCWZLwu6fGdmdM",
    authDomain: "sabor-chileno.firebaseapp.com",
    projectId: "sabor-chileno",
    storageBucket: "sabor-chileno.appspot.com",
    messagingSenderId: "580875781361",
    appId: "1:580875781361:web:e9414c33a89a8de8201550",
    measurementId: "G-CZHGRYB09F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);






export default db;