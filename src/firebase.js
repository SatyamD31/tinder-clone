import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAC1LnUjUKX_CC5jG2crbouBvMD-yS_EeQ",
    authDomain: "tinder-clone-ac373.firebaseapp.com",
    databaseURL: "https://tinder-clone-ac373.firebaseio.com",
    projectId: "tinder-clone-ac373",
    storageBucket: "tinder-clone-ac373.appspot.com",
    messagingSenderId: "611388180093",
    appId: "1:611388180093:web:620b3f825c8f4d5d935314",
    measurementId: "G-ZC62ZBLBF8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;