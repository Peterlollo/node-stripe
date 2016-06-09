var request = require('request');

module.exports = {
  printPayment: function(req, res, next) {
    //SEND USER TRIP INFO TO DATABASE
    //PROCESS AND BOOK USER TRIP
    console.log('THE REQUEST=====>>>>>>>', req);
    res.json(req.body);
    res.send(200);
  }
}