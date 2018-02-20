import firebase from 'firebase';
import { firebaseConfig } from './config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.database();
export const firebaseStorage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
