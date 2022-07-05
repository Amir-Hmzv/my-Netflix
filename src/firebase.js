// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRckqQY4xV4_p4sGOdv9QE2koHVdCPcZQ",
  authDomain: "my-netflix-a37d5.firebaseapp.com",
  projectId: "my-netflix-a37d5",
  storageBucket: "my-netflix-a37d5.appspot.com",
  messagingSenderId: "691517680609",
  appId: "1:691517680609:web:f0c935201b45497b5880a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);