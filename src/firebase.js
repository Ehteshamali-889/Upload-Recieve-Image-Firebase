// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHwIwRQr5sWZrFPhUbMZCHTCuSYBKp4jk",
  authDomain: "upload-recieve-image.firebaseapp.com",
  projectId: "upload-recieve-image",
  storageBucket: "upload-recieve-image.appspot.com",
  messagingSenderId: "531906584331",
  appId: "1:531906584331:web:fb9e3f4a8c3b8d2e5f8c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app);