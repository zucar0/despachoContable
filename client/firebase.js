import firebase from "firebase/app";
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4aHG10I63SD5BPX_vrWEL9QS9Ygh39ZQ",
    authDomain: "booking-86747.firebaseapp.com",
    projectId: "booking-86747",
    storageBucket: "booking-86747.appspot.com",
    messagingSenderId: "56789815714",
    appId: "1:56789815714:web:64e8ff058aa4a4686722fb"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase;