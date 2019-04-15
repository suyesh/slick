import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnxEX0Ld1ETKtRnpuf-qM0sukudmpaqnQ",
  authDomain: "slick-8dfa4.firebaseapp.com",
  databaseURL: "https://slick-8dfa4.firebaseio.com",
  projectId: "slick-8dfa4",
  storageBucket: "slick-8dfa4.appspot.com",
  messagingSenderId: "20440756177"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase };
