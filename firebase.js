var firebaseConfig = {
    apiKey: "AIzaSyASDoC-qPQ0rwVGoV34z96iLFj0lt6K4A4",
    authDomain: "clone-63fbf.firebaseapp.com",
    projectId: "clone-63fbf",
    storageBucket: "clone-63fbf.appspot.com",
    messagingSenderId: "939826225011",
    appId: "1:939826225011:web:9d9c9fc640fdcf39b4af06",
    measurementId: "G-36CC7NKKYY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();