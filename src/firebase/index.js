// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB13s18bDSOk8CINKa26Q79aA-rpUNityI",
  authDomain: "todo-48588.firebaseapp.com",
  projectId: "todo-48588",
  storageBucket: "todo-48588.appspot.com",
  messagingSenderId: "194757799007",
  appId: "1:194757799007:web:ac4bd419e77d4c0365ffea",
  measurementId: "G-NX05R0X9YN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, auth, firestore };
