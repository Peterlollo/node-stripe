var express = require('express');

var app = express();

//MIDDLEWARE AND ROUTING
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


app.listen(8000);
console.log('Application running on port 8000');
module.exports = app;