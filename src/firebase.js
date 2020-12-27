import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABlouZ2oLETCebxop156ZXbtYqdX6DPU8",
    authDomain: "amzon-challenge-34e22.firebaseapp.com",
    projectId: "amzon-challenge-34e22",
    storageBucket: "amzon-challenge-34e22.appspot.com",
    messagingSenderId: "484133247599",
    appId: "1:484133247599:web:4ab8ca772d5e3232358b9a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};