var paymentsController = require('../payments/paymentsController.js');

module.exports = function(app, express) {
  app.post('/api/payments/', paymentsController.printPayment);
};