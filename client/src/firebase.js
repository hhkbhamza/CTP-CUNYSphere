// firebase.js
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebaseConfig';
import firebaseConfigOne from './firebase/firebaseConfigOne';
import firebaseConfigTwo from './firebase/firebaseConfigTwo';
import firebaseConfigThree from './firebase/firebaseConfigThree';

const app = initializeApp(firebaseConfig, 'app');
const appOne = initializeApp(firebaseConfigOne, 'appOne');
const appTwo = initializeApp(firebaseConfigTwo, 'appTwo');
const appThree = initializeApp(firebaseConfigThree, 'appThree');

export { app, appOne, appTwo, appThree };
