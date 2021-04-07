import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEwM1brRv713uTQduExeKWM7AXqIBEYgc",
    authDomain: "slack-app-c76d7.firebaseapp.com",
    projectId: "slack-app-c76d7",
    storageBucket: "slack-app-c76d7.appspot.com",
    messagingSenderId: "1078129807558",
    appId: "1:1078129807558:web:da63ef4b89c5a944ae07c7",
    measurementId: "G-R65CYVFS6X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  // Start a sign in process for an unauthenticated user.
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };