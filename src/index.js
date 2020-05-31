import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "./index.css";
import { ExpenseTracker } from "./App";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyB6LQzEGYqb5J6XZsqtCabpw54RbukWCSc",
  authDomain: "expensetracker-ddc5d.firebaseapp.com",
  databaseURL: "https://expensetracker-ddc5d.firebaseio.com",
  projectId: "expensetracker-ddc5d",
  storageBucket: "expensetracker-ddc5d.appspot.com",
  messagingSenderId: "90521970708",
  appId: "1:90521970708:web:0aa223dd1ef6a766471f01",
};
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);
const db = fireBase.database();
export let ref = db.ref("expense");

ReactDOM.render(<ExpenseTracker />, document.getElementById("root"));
