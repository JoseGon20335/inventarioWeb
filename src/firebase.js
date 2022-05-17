import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'dotenv/config';
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyA_WclKi_NmhfPviSUYxdLUJ4FXvexgGpE",
    authDomain: "stw-uvg-proyecto2.firebaseapp.com",
    projectId: "stw-uvg-proyecto2",
    storageBucket: "stw-uvg-proyecto2.appspot.com",
    messagingSenderId: "365577856480",
    appId: "1:365577856480:web:08ba1a0676098be3543785",
    measurementId: "G-902XSQSB9J",
};

let app = ""

if (!firebase.apps.length) {
  app =firebase.initializeApp(firebaseConfig);
} else {
  app =firebase.app(); 
}

//const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
const db = firebase.firestore();
const storage = getStorage();

export {auth, db, storage}