// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, googleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdU3AciSv59_w9iSfgK0W2S0uhUo-RL68",
  authDomain: "disney-plus-clone-c00df.firebaseapp.com",
  projectId: "disney-plus-clone-c00df",
  storageBucket: "disney-plus-clone-c00df.appspot.com",
  messagingSenderId: "261141755022",
  appId: "1:261141755022:web:c539562f74bca4a243c5df",
  measurementId: "G-CLRGWHR6BN",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider(); // add the social login of google (that little popuptells you to pick up which email you wanna log in with)

export {auth, provider,storage};
export default db;


