// Import the functions you need from the SDKs you need
import admin from 'firebase-admin';
import dotenv from 'dotenv'

import { applicationDefault, initializeApp as initializeAppAdmin } from "firebase-admin/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

dotenv.config()

const firebaseConfig = {
    apiKey: "AIzaSyDtFVaHjPawShInFDGT3d4weIqhQhSz8Js",
    authDomain: "nikola-firebase-65f1e.firebaseapp.com",
    projectId: "nikola-firebase-65f1e",
    storageBucket: "nikola-firebase-65f1e.appspot.com",
    messagingSenderId: "528224825065",
    appId: "1:528224825065:web:cda6d710e47565651b4a78",
    measurementId: "G-7M0Q4NFBD4"
};

if (!admin.apps.length) {
    initializeAppAdmin({
        credential: applicationDefault(),
    })
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = admin.firestore();

export { db }