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

	//routing files
	app.use('/customers', require('./route/CustomerRoute'));

	//start listening over port 3000
	app.listen(3000, function () {
		console.log('App listening on port 3000!');
	});
}

module.exports = app;
