var express = require('express');
var database = require('./database/Database.js');
var bodyParser = require('body-parser');

var app = express();

database.connect('mongodb://localhost/node-singlepage', function(status){
	if (status !== true) {
		console.log('problem to connect on database: ' + status);
		return;
	}
	run();
});

function run(){
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));

	// parse application/json
	app.use(bodyParser.json());

	// allow cross domain
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
		next();
	});

	//routing files
	app.use('/customers', require('./route/CustomerRoute'));

	//start listening over port 3000
	app.listen(3000, '127.0.0.1', function () {
		console.log('App listening on port 3000!');
	});
}

module.exports = app;
