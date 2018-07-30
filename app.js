var express = require('express');
var path = require('path');
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//db connection
mongoose.connect(config.getDBCon(),{useNewUrlParser: true} );


setupController(app);
apiController(app);

app.listen(port);
