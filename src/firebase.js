import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDWKmhWXPYNPqRqDdo3N6PIjgXrE25rF4",
    authDomain: "recurrence-dialog-evyatar.firebaseapp.com",
    projectId: "recurrence-dialog-evyatar",
    storageBucket: "recurrence-dialog-evyatar.appspot.com",
    messagingSenderId: "233101685389",
    appId: "1:233101685389:web:bfe4930656687ee10068c4",
    measurementId: "G-V6YFXZYCET"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };