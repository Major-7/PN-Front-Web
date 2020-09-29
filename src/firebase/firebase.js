import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCxWAiXDnaWkiL6qUV4_0__APQMKFniNxk",
    authDomain: "ait-application-suite.firebaseapp.com",
    databaseURL: "https://ait-application-suite.firebaseio.com",
    projectId: "ait-application-suite",
    storageBucket: "ait-application-suite.appspot.com",
    messagingSenderId: "232007863634",
    appId: "1:232007863634:web:e6d65e332ef71e1e723e8b",
    measurementId: "G-S4TSHJP7F0",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();