import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGoqkbyPEzy56RCEQG2y71XCJU5fFAvUU",
  authDomain: "generacionconfianza.firebaseapp.com",
  projectId: "generacionconfianza",
  storageBucket: "generacionconfianza.appspot.com",
  messagingSenderId: "791338526784",
  appId: "1:791338526784:web:e01074b379c2480797d7a5",
  measurementId: "G-PSTGX1YE17",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
