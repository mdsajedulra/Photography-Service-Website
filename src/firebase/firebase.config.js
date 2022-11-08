// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrNB-2f3kXULoQ1zMPFSCz2_HGabBkVjk",
    authDomain: "photograpy-by-sajedul.firebaseapp.com",
    projectId: "photograpy-by-sajedul",
    storageBucket: "photograpy-by-sajedul.appspot.com",
    messagingSenderId: "1079975211151",
    appId: "1:1079975211151:web:11e96e1f584d31700100fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;