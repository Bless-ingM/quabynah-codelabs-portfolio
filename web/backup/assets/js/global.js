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

// Initialize braintree
// braintree.client.create({
// 
// });

// Load page
$(document).ready(function() {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });

  console.log(firebase.auth().currentUser);
  window.onscroll = function() {
    scrollFunction();
  };
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll_button").style.display = "block";
  } else {
    document.getElementById("scroll_button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
