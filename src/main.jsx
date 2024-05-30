import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsfvjLuhc1knPCdvOGqfD4a0vAMpnG_rw",
  authDomain: "digitalsound24.firebaseapp.com",
  projectId: "digitalsound24",
  storageBucket: "digitalsound24.appspot.com",
  messagingSenderId: "553184583532",
  appId: "1:553184583532:web:ef5a3c8adff97ef8345d49"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

