var key = window.localStorage.getItem("item-key");
window.localStorage.setItem("item-key", null);

$(document).ready(function() {
  if (key) {
    $("#item_key").text(key);
  } else {
    console.log("No key found");
  }
});
