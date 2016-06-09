$(document).ready(function() {
    // Watch for a form submission:
    $("#payment-form").submit(function(event) {

        $('#submitBtn').attr('disabled', 'disabled');

        var error = false;

        // Get the values:
        var ccNum = $('.card-number').val(),
            cvcNum = $('.card-cvc').val(),
            expMonth = $('.card-expiry-month').val(),
            expYear = $('.card-expiry-year').val();

        // Validate the number:
        if (!Stripe.card.validateCardNumber(ccNum)) {
            error = true;
            reportError('The credit card number appears to be invalid.');
        }

        // Validate the CVC:
        if (!Stripe.card.validateCVC(cvcNum)) {
            error = true;
            reportError('The CVC number appears to be invalid.');
        }

        // Validate the expiration:
        if (!Stripe.card.validateExpiry(expMonth, expYear)) {
            error = true;
            reportError('The expiration date appears to be invalid.');
        }

        if (!error) {
            // Get the Stripe token:
            Stripe.card.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);
         }
        // Prevent the form from submitting:
        return false;
    });
}); // document ready.




 function stripeResponseHandler(status, response) {
  if (response.error) {
      reportError(response.error.message);
  } else { // No errors, submit the form.
    // Get a reference to the form:
    var f = $("#payment-form");
    // Get the token from the response:
    var token = response.id;
    console.log('TOKEN RETURNED FROM STRIPE: ', token);
    // Add the token to the form:
    f.append('<input type="hidden" name="stripeToken" value="' + token + '" />');
    // Submit the form:
    f.get(0).submit();
  }
}

function reportError(msg) {

    // Show the error in the form:
    $('#payment-errors').text(msg).addClass('error');

    // Re-enable the submit button:
    $('#submitBtn').prop('disabled', false);

    return false;
}
