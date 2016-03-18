var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	id: Number,
  	name: String,
  	category: String
});

module.exports = mongoose.model('Customer', CustomerSchema);
