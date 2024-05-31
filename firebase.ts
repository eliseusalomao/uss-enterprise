import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseconfig: FirebaseOptions = {
    apiKey: "AIzaSyDz2TMTadLN5l2sr1DNLY5sCuC_5NnDbIY",
    authDomain: "uss-enterprise-362a2.firebaseapp.com",
    projectId: "uss-enterprise-362a2",
    storageBucket: "uss-enterprise-362a2.appspot.com",
    messagingSenderId: "203414772414",
    appId: "1:203414772414:web:e116fdcab0a52676ed1cef",
    measurementId: "G-18YNS4DXG7"
}

export const app = initializeApp(firebaseconfig)
export const db = getFirestore(app)
