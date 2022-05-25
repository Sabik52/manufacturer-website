// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm5p0sYEyq0dXnBOtAB_ZN6petXMpXXT0",
  authDomain: "compucare-92ac2.firebaseapp.com",
  projectId: "compucare-92ac2",
  storageBucket: "compucare-92ac2.appspot.com",
  messagingSenderId: "522346677106",
  appId: "1:522346677106:web:33b703fa2aa8fe25e253eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;