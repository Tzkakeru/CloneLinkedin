// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGnn0c37TcQCZ1D1V9NI1AMuQo0_1_Rkw",
  authDomain: "linkedinclone-58785.firebaseapp.com",
  projectId: "linkedinclone-58785",
  storageBucket: "linkedinclone-58785.appspot.com",
  messagingSenderId: "551638674361",
  appId: "1:551638674361:web:59e432e12f77e92fc7a468"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
