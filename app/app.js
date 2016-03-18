var express = require('express');
var database = require('./database/Database.js');

var app = express();

database.connect('mongodb://localhost/node-singlepage', function(status){
	if (status !== true) {
		console.log('problem to connect on database: ' + status);
		return;
	}
	run();
});

function run(){
	app.use('/customers', require('./route/CustomerRoute'));
	app.listen(3000, function () {
	  console.log('App listening on port 3000!');
	});
}

module.exports = app;
