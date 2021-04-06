import firebase from 'firebase';
import firebaseConfig from 'firebase.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireStoreDb = firebaseApp.firestore();

const firebaseAuth = firebase.auth();
const firebaseProvider = new firebase.auth.GoogleAuthProvider();

export { fireStoreDb, firebaseAuth, firebaseProvider };
