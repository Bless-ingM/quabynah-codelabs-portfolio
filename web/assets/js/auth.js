$(document).ready(function() {
  // Hide loading
  showLoading(false);

  // Listen for key down events
  document.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
      login();
    }
  });
});

const showLoading = state => {
  if (state) {
    $("#loading").show();
  } else {
    $("#loading").hide();
  }
};

// Email and password
const login = () => {
  // Get the fields
  var email = $("#auth_email");
  var password = $("#auth_password");

  if (validator.isEmail(email.val()) && !validator.isEmpty(password.val())) {
    showLoading(true);
    email.prop("disabled", true);
    password.prop("disabled", true);
    $("#login_button").attr("disabled", true);

    // Do some login
  } else {
    alert("Please enter your password");
  }
};

// Google Auth
const googleOAuth = () => {
  // Get provider
  var provider = new firebase.auth.GoogleAuthProvider();

  // Add scope
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  //   Authenticate user
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      window.localStorage.setItem("admin-key", user.uid);
      window.location.href = "./dashboard.html";
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      alert(`Auth credentials: ${credential}`);
    });
};
