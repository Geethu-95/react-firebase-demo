// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRdlBwsZpX_xsKEVk0gkflnjvAA3qD9DA",
  authDomain: "reactfirebasedemo-c8c3f.firebaseapp.com",
  projectId: "reactfirebasedemo-c8c3f",
  storageBucket: "reactfirebasedemo-c8c3f.appspot.com",
  messagingSenderId: "223466088063",
  appId: "1:223466088063:web:debe6e172139cb83cb814a",
  measurementId: "G-DLEWDGQL59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);