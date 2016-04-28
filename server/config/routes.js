var citiesController = require('../cities/citiesController.js');

module.exports = function(app, express) {
  app.get('/api/locations/', citiesController.getCities);
};