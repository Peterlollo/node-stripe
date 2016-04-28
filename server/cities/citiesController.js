var request = require('request');

module.exports = {
  getCities: function(req, res, next) {
    var options = {
      method: 'GET',
      url: 'https://www.fromatob.com/api/v1/stops?name=ber'
      };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.end(body);
    });
  }
}