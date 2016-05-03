var request = require('request');

module.exports = {
  bookTrip: function(req, res, next) {
    //Send user trip info to database for data collection
    //Process and Book User Trip
    res.json(req.body);
  }
}