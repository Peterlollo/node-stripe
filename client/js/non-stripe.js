

$(document).ready(function() {
  //Generate fake stripe token for testing
  var token = '123abc';
  //Grab the payment form
  var f = $("#payment-form");
  // Add the token to the form:
  f.append('<input type="hidden" name="stripeToken" value="' + token + '" />');
  // Submit the form:
  f.get(0).submit();
});