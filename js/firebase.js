import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import{
    push,
    child,
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoeD9r7A6lbZ9uKllrc9RTsDe3Q8oGeTA",
  authDomain: "just-share-bb959.firebaseapp.com",
  projectId: "just-share-bb959",
  storageBucket: "just-share-bb959.appspot.com",
  messagingSenderId: "427284803853",
  appId: "1:427284803853:web:8c1f50bd04632c38198044"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);
const storage = getStorage();

export{
    initializeApp,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    app,
    auth,
    getDownloadURL,
    ref,
    storage,
    push,
    child,
    serverTimestamp,
    uploadBytesResumable,
}