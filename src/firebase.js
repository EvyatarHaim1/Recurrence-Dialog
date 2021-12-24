import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDDWKmhWXPYNPqRqDdo3N6PIjgXrE25rF4",
    authDomain: "recurrence-dialog-evyatar.firebaseapp.com",
    projectId: "recurrence-dialog-evyatar",
    storageBucket: "recurrence-dialog-evyatar.appspot.com",
    messagingSenderId: "233101685389",
    appId: "1:233101685389:web:bfe4930656687ee10068c4",
    measurementId: "G-V6YFXZYCET"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };