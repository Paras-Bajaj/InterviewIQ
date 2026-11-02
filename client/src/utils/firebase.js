
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-91b55.firebaseapp.com",
  projectId: "interview-91b55",
  storageBucket: "interview-91b55.firebasestorage.app",
  messagingSenderId: "810866136630",
  appId: "1:810866136630:web:c41c17929aaff7c5c2aa97"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}