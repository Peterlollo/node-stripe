var express = require('express');

var app = express();

//MIDDLEWARE AND ROUTING
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 5000;

app.listen(port);
console.log('Application running on port ' + port);
module.exports = app;