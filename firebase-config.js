import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import firebaseEnv from "./firebase-env.js";

const app = initializeApp(firebaseEnv);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };