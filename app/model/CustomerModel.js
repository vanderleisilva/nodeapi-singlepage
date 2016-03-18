var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	id: Number,
	name: { type:String, required:true },
	category: { type:String }
});

module.exports = mongoose.model('Customer', CustomerSchema);
