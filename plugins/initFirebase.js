import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDXfRWySdQaExtaUytovTvr63m_dGmJL9w",
    authDomain: "budolfinds-8acf4.firebaseapp.com",
    projectId: "budolfinds-8acf4",
    storageBucket: "budolfinds-8acf4.appspot.com",
    messagingSenderId: "590078983820",
    appId: "1:590078983820:web:612dc0d0424abf1b5ac5a9",
    measurementId: "G-6FQBNZC4WS"
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage }