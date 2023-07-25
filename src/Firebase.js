import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBlFlUxdZ7brnzWHmzDMgNmPC2mFIzEErY",
    authDomain: "dm-twitter-clone.firebaseapp.com",
    projectId: "dm-twitter-clone",
    storageBucket: "dm-twitter-clone.appspot.com",
    messagingSenderId: "868375687909",
    appId: "1:868375687909:web:81899163c977955af1da0c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db