"use strict";

$(document).ready(function() {});

const submitForm = () => {
  var email = $("#contact_email");
  var message = $("#contact_message");

  if (validator.isEmail(email.val()) && !validator.isEmpty(message.val())) {
    alert(`${email.val()} & message is: ${message.val()}`);
  } else {
    alert("Please enter a message first");
  }
};
