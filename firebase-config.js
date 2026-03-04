import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2pAdTz4x8fbf_Jpg5yuLGoVa_Srx7I3M",
  authDomain: "learningfirebase-521f7.firebaseapp.com",
  projectId: "learningfirebase-521f7",
  storageBucket: "learningfirebase-521f7.firebasestorage.app",
  messagingSenderId: "577707917241",
  appId: "1:577707917241:web:9a8641bb12b13e57b8c068"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };