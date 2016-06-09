var request = require('request');

module.exports = {
  printPayment: function(req, res, next) {
    //SEND USER TRIP INFO TO DATABASE
    //PROCESS AND BOOK USER TRIP
     var tokenObj = req.body
     console.log('THE TOKEN=====>>>>>>>', tokenObj);
     //res.render('paid')
     res.render('paid', { token: tokenObj.stripeToken })
     // res.json(req.body);
     // res.send(200);
  }
}