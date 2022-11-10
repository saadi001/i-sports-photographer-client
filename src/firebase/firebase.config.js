// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo-FWhXgQNJUkbSiSGG1mASYwWMRVzZ94",
  authDomain: "sports-photography-assignment.firebaseapp.com",
  projectId: "sports-photography-assignment",
  storageBucket: "sports-photography-assignment.appspot.com",
  messagingSenderId: "571655478937",
  appId: "1:571655478937:web:b410f901007ddf4b052208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;