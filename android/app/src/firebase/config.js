/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2RQTcNNELXuFBCZYRJkiGWZ88qTJrIq0",
    authDomain: "kenreactskia.firebaseapp.com",
    projectId: "kenreactskia",
    storageBucket: "kenreactskia.appspot.com",
    messagingSenderId: "798978259100",
    appId: "1:798978259100:web:d4d61ba34d4e950ba49559"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };