import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBnsE9YLkO9gmg7ngTrU7M2HbUljzdqzwg",
  authDomain: "fir-demo-f0232.firebaseapp.com",
  projectId: "fir-demo-f0232",
  storageBucket: "fir-demo-f0232.firebasestorage.app",
  messagingSenderId: "211443728247",
  appId: "1:211443728247:web:1bea2a82035e03ad91ab72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };