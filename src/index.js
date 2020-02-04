import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { FirestoreProvider } from 'react-firestore';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

// const fbConfig = {
//   apiKey: 'AIzaSyB_nAtQoyQvKmIxniAneZE8o3bpNoi2Ot4',
//   projectId: 'icalendar-2a913'
// };
// // react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users'
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
//   // enableClaims: true // Get custom claims along with the profile
// };

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch
//   // createFirestoreInstance // <- needed if using firestore
// };

// firebase.initializeApp(fbConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
