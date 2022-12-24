import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDtb-tqkUVT0frZpVFqupSRXKJOWY1nk0E",
    authDomain: "latch-a5d70.firebaseapp.com",
    projectId: "latch-a5d70",
    databaseUrl: "https://latch-a5d70-default-rtdb.firebaseio.com",
    storageBucket: "gs://latch-a5d70.appspot.com",
    messagingSenderId: "765207579307",
    appId: "1:765207579307:web:4414efbcdad42e188d05ee",
    measurementId: "G-KJE9KZQXGT"
  };

var firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();
var storage = firebase.storage();
var auth = firebase.auth();
var storageRef = firebase.storage().ref();
var firebaseVars = {db, auth, storage, storageRef};

export default firebaseVars;