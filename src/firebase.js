const firebase = require("firebase/app");
require("firebase/auth");
//require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
    apiKey: "AIzaSyDKR8dIfqR5wgX6UBoKrfr1oND5g5ymn4k",
    authDomain: "red-social11.firebaseapp.com",
    databaseURL: "https://red-social11-default-rtdb.firebaseio.com",
    projectId: "red-social11",
    storageBucket: "red-social11.appspot.com",
    messagingSenderId: "74858801898",
    appId: "1:74858801898:web:b6c9449cb5989fe2e60593"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, auth, storage} 