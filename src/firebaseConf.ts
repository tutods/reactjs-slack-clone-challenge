import firebase from 'firebase';
import firebaseConfig from './firebase.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireStoreDb = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { fireStoreDb };
