
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence, initializeFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "rnz-cropwise",
  "appId": "1:244303809991:web:60e7c13fd6750561b85de2",
  "storageBucket": "rnz-cropwise.firebasestorage.app",
  "apiKey": "AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg",
  "authDomain": "rnz-cropwise.firebaseapp.com",
  "messagingSenderId": "244303809991"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = initializeFirestore(app, {
  localCache: { kind: 'persistent' }
});

// Initialize Firebase Cloud Messaging and get a reference to the service
// It's better to get the messaging instance in the component to ensure it's client-side.
const messaging = typeof window !== 'undefined' ? getMessaging(app) : null;


export { app, auth, db, messaging };
