// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVdMKM5frdWx6rC1yKGbM5r0NotA7tIng",
  authDomain: "my-money-d13fe.firebaseapp.com",
  projectId: "my-money-d13fe",
  storageBucket: "my-money-d13fe.appspot.com",
  messagingSenderId: "396032558154",
  appId: "1:396032558154:web:f2ba5817ac935bbf09d2b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export {auth,provider,db}