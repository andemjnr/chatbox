// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_uFQ6gagSkZOoFFSgwlu_tq6gc0Q5ZFk",
  authDomain: "chatbox-901b6.firebaseapp.com",
  projectId: "chatbox-901b6",
  storageBucket: "chatbox-901b6.appspot.com",
  messagingSenderId: "535685166906",
  appId: "1:535685166906:web:5681305e4c253c4d824203",
  measurementId: "G-EYQTMVLMWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export const db = getFirestore(app);