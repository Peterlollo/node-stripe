var morgan = require('morgan');
var bodyParser = require('body-parser');


module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(express.static(__dirname + '/../../client'));
};