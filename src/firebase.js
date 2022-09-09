// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, googleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtDRk0gk1kjdq9MJ7LJk3iNfCJYOYKxBQ",
  authDomain: "sincere-pixel-323907.firebaseapp.com",
  projectId: "sincere-pixel-323907",
  storageBucket: "sincere-pixel-323907.appspot.com",
  messagingSenderId: "400032294371",
  appId: "1:400032294371:web:efa3381c00c0a7c1512cd6",
  measurementId: "G-39KV9WGMP8"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider(); // add the social login of google (that little popuptells you to pick up which email you wanna log in with)

export {auth, provider,storage};
export default db;
