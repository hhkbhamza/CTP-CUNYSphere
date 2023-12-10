// firebase.js
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebaseConfig';
import firebaseConfigOne from './firebase/firebaseConfigOne';

const app = initializeApp(firebaseConfig, 'app');
const appOne = initializeApp(firebaseConfigOne, 'appOne');

export { app, appOne };
