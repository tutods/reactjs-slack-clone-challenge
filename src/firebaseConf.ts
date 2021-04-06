import firebase from 'firebase';
import firebaseConfig from './firebase.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireStoreDb = firebaseApp.firestore();

export { fireStoreDb };
