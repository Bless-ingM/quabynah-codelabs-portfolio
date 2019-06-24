// Firebase Configuration
var firebaseConfig = {
  apiKey: "AIzaSyCU1ebt8aSImAT6OnedwwY1CbCrU6GXIUs",
  authDomain: "quabynah-codelabs.firebaseapp.com",
  databaseURL: "https://quabynah-codelabs.firebaseio.com",
  projectId: "quabynah-codelabs",
  storageBucket: "",
  messagingSenderId: "437958216480",
  appId: "1:437958216480:web:2cf96db761273816"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Load page
$(document).ready(function() {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });

  console.log(firebase.auth().currentUser);
});
