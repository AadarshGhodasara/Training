import  firebase from "firebase"; 

var firebaseConfig = {
    apiKey: "AIzaSyDB-9gDavlUpDwNrpP3YN1gPazFS1bZqQM",
    authDomain: "react-js-web-31093.firebaseapp.com",
    databaseURL: "https://react-js-web-31093-default-rtdb.firebaseio.com/",
    projectId: "react-js-web-31093",
    storageBucket: "react-js-web-31093.appspot.com",
    messagingSenderId: "1087500234803",
    appId: "1:1087500234803:web:8adcc489c200dfe1ab3346",
    measurementId: "G-KY1ST75J3D"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;