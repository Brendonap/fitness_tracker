import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCr6KavzHugbw7px_rLVh0djmErHfSa4F0",
  authDomain: "we-workout.firebaseapp.com",
  databaseURL: "https://we-workout.firebaseio.com",
  projectId: "we-workout",
  storageBucket: "we-workout.appspot.com",
  messagingSenderId: "898492137620",
  appId: "1:898492137620:web:e030b5566ab860be6df481",
  measurementId: "G-6GQBDVR59N",
  webClientId:
    "898492137620-v7r21i765mkjk14j7g1km9711fedb154.apps.googleusercontent.com",
  webClientSecret: "nTLo7TEvBlTIuTr1v0CB_sL1"
});

const db = firebase.firestore();

export default db;
