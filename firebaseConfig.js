import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBN3CgaGeuR9JZJDzkB1cwX_-O0RwzvB7s",
  authDomain: "npx-twitter-clone.firebaseapp.com",
  projectId: "npx-twitter-clone",
  storageBucket: "npx-twitter-clone.appspot.com",
  messagingSenderId: "9220294263",
  appId: "1:9220294263:web:f6e7dbaa1e512fd2132872",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
