import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34fOL0f1umAXOSZWKTa9OGtcQO-oA6jA",
  authDomain: "uber-next-clone-b3402.firebaseapp.com",
  projectId: "uber-next-clone-b3402",
  storageBucket: "uber-next-clone-b3402.appspot.com",
  messagingSenderId: "114049955624",
  appId: "1:114049955624:web:1e33efa619b454e1fc421d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }