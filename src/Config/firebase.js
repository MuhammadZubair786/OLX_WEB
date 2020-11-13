import * as firebase from 'firebase/app'
import 'firebase/database' 
import 'firebase/auth' 

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7TJY6TK5-eDS-6G4_vUD-HKuo1CyPRTo",
    authDomain: "olx-wesite.firebaseapp.com",
    databaseURL: "https://olx-wesite.firebaseio.com",
    projectId: "olx-wesite",
    storageBucket: "olx-wesite.appspot.com",
    messagingSenderId: "461353420335",
    appId: "1:461353420335:web:75a211cdc369ee285828da"
  };
  console.log(firebase.database)


 
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()

  export default firebase
  

