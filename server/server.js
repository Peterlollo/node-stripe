var express = require('express');
var mongoose = require('mongoose');

var app = express();

//connect to mongo database
mongoose.connect('mongodb://localhost/mean-scaffold');

//Add middleware/routing functionality:
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


app.listen(8000);
console.log('Application running on port 8000');
module.exports = app;