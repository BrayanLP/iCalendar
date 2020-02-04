// import * as firebase from 'firebase/app';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// Your web app's Firebase configuration

var config = {
  apiKey: 'AIzaSyB_nAtQoyQvKmIxniAneZE8o3bpNoi2Ot4',
  authDomain: 'icalendar-2a913.firebaseapp.com',
  databaseURL: 'https://icalendar-2a913.firebaseio.com',
  projectId: 'icalendar-2a913',
  storageBucket: 'icalendar-2a913.appspot.com',
  messagingSenderId: '1070220924270',
  appId: '1:1070220924270:web:04fa5612db1b61e5a01d7f'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.database();
export const firestore = firebase.firestore();

export const auth = firebase.auth();
export { firebase };
// const googleProvider = new firebase.auth.GoogleAuthProvider;
// export { firebase, auth, database };
