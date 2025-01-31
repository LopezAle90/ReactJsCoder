// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUQPIamzSxBh-nqoLq0N6ex2dqrLGAEt0",
  authDomain: "eiyushop-c1754.firebaseapp.com",
  projectId: "eiyushop-c1754",
  storageBucket: "eiyushop-c1754.firebasestorage.app",
  messagingSenderId: "359107415807",
  appId: "1:359107415807:web:63479a0dcba915928006ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);