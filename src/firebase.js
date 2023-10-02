import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createContext } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyCLz2FbExX8-t9K_VMqwzR2lp4qL1fOyfo",
    authDomain: "react-321023.firebaseapp.com",
    projectId: "react-321023",
    storageBucket: "react-321023.appspot.com",
    messagingSenderId: "446995858746",
    appId: "1:446995858746:web:248dc3df7fd9cd982f3c03",
    measurementId: "G-D8X5ZZ323Y"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const DBContext = createContext(db)