// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlHXmwEEAptevDpG8uFFx7xNKn32dELaM",
    authDomain: "rafi-ul-islam-chowdhury.firebaseapp.com",
    projectId: "rafi-ul-islam-chowdhury",
    storageBucket: "rafi-ul-islam-chowdhury.appspot.com",
    messagingSenderId: "697861843892",
    appId: "1:697861843892:web:24ba9fa12e662b24a1e0e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;