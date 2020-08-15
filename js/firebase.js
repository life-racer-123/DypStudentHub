 
var app_firebase = {};

 (function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpVU7oVna2WJK0pSIBzUtoDdlHaeEIkwM",
    authDomain: "studenthub-698ce.firebaseapp.com",
    databaseURL: "https://studenthub-698ce.firebaseio.com",
    projectId: "studenthub-698ce",
    storageBucket: "studenthub-698ce.appspot.com",
    messagingSenderId: "175068655779",
    appId: "1:175068655779:web:a69213dc07ff6325614f16",
    measurementId: "G-K5TF78SQ6K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  app_firebase = firebase;
})()
