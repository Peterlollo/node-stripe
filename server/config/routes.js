var citiesController = require('../cities/citiesController.js');

module.exports = function(app, express) {



  app.get('/api/locations/', citiesController.getCities);


  app.post('/home', function(req, res, err){
    console.log('tryin to post to users with this req.body', req.body);
    res.send({'hey': 'man'});
  });


};