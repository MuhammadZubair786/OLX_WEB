import * as firebase from 'firebase/app'
import 'firebase/database' 
import 'firebase/auth' 
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWA9MCb11_BEv63n-6FGsiWceSVSKaJVM",
  authDomain: "olx-website-8a25c.firebaseapp.com",
  projectId: "olx-website-8a25c",
  storageBucket: "olx-website-8a25c.appspot.com",
  messagingSenderId: "430465359698",
  appId: "1:430465359698:web:9d3d12880b811dffe1248b",
  measurementId: "G-KRQCZ3W991"
};

  console.log(firebase.database)


 
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()
  const storage =firebase.storage();
  const database=firebase.database()

  export {storage,database, firebase as default } 
  

