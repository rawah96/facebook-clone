import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCqkxKm6mVm-ouUcXJF_WH4Yot0HiIcBow",
    authDomain: "facebook-clone-9d023.firebaseapp.com",
    databaseURL: "https://facebook-clone-9d023.firebaseio.com",
    projectId: "facebook-clone-9d023",
    storageBucket: "facebook-clone-9d023.appspot.com",
    messagingSenderId: "3494589683",
    appId: "1:3494589683:web:9ee36c763d039543707386",
    measurementId: "G-CJ0JQZ1C3Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

