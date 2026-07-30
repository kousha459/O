import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNV1-OyUQPw5R1XgCFXwvxdVFWGV00k4M",
  authDomain: "calender-6b9c7.firebaseapp.com",
  projectId: "calender-6b9c7",
  storageBucket: "calender-6b9c7.firebasestorage.app",
  messagingSenderId: "540947456432",
  appId: "1:540947456432:web:c7d4f82eaec05789d9b675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Make Firestore available to the rest of your app
window.db = db;
