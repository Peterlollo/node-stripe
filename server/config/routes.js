var citiesController = require('../cities/citiesController.js');
var tripsController = require('../trips/tripsController.js')

module.exports = function(app, express) {
  app.get('/api/locations/', citiesController.getCities);
  app.post('/api/userTrips/', tripsController.bookTrip)
  app.post('/api/payments/', paymentsController.printPayment);
};