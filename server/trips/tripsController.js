var request = require('request');

module.exports = {
  bookTrip: function(req, res, next) {
    //SEND USER TRIP INFO TO DATABASE
    //PROCESS AND BOOK USER TRIP
    res.json(req.body);
    res.send(200);
  }
}