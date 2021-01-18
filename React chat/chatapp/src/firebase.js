import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDPNIXu3PttAXbaQI1nHvkJGH9aNmOvJOg",
    authDomain: "chatapp2-ebbc3.firebaseapp.com",
    databaseURL: "https://chatapp2-ebbc3.firebaseio.com",
    projectId: "chatapp2-ebbc3",
    storageBucket: "chatapp2-ebbc3.appspot.com",
    messagingSenderId: "397573966881",
    appId: "1:397573966881:web:f60479076c661def0be760",
    measurementId: "G-5T5SZN693Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;
  export const auth = firebase.auth();
  export const db = firebase.firestore();