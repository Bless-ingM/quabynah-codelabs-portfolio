const db = firebase.firestore();

$(document).on("ready", function() {
  var path = location.href.split("/");
  console.log(path);
});

var paths = [
  {
    source: "/blog/:post*",
    destination: "https://quabynah-codelabs.web.app/blog/:post",
    type: 301
  },
  {
    source: "/apps/:id*",
    destination: "https://quabynah-codelabs.web.app/apps/:id",
    type: 301
  }
];
