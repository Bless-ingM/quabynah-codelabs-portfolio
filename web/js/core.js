// Firebase SDK
const auth = firebase.auth();
const db = firebase.firestore();

// Document is ready
$(document).on("ready", function() {});

const _testLogin = () => {
  auth
    .signInWithEmailAndPassword("quabynahdennis@gmail.com", "password1234")
    .then(response => {
      console.log(response.user);
      db.collection("users")
        .doc(response.user.uid)
        .set(
          {
            username: `${response.displayName}`,
            uid: response.user.uid,
            email: response.user.email,
            timestamp: new Date().getTime()
          },
          { merge: true }
        );
    })
    .catch(err => {
      console.log(err);
    });
};
