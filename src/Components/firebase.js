import  firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import { useState } from 'react';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };


  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();
  const store = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  // const CurrentUser = firebase.auth().currentUser;
  // const [CurrentUser,setCurrentUser] = useState(null);

  export{
    storage , 
    store,
    timestamp , 
    // CurrentUser,
    // setCurrentUser,
    firebase as default
  } 

  