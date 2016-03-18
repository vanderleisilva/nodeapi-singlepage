var express = require('express');
var router = express.Router();
var Customer = require('../model/CustomerModel.js');

/* GET /customers listing. */
router.get('/', function(req, res, next) {
	Customer.find(function (err, data) {
		res.json(err ? err : data);
	});
});

/* POST /customer */
router.post('/', function(req, res, next) {
	Customer.create(req.body, function (err, data) {
		res.json(err ? err : data);
	});
});

/* GET /customer/id */
router.get('/:id', function(req, res, next) {
	Customer.findById(req.params.id, function (err, data) {
		res.json(err ? err : data);
	});
});

/* PUT /customer/:id */
router.put('/:id', function(req, res, next) {
	Todo.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
		res.json(err ? err : data);
	});
});

/* DELETE /customer/:id */
router.delete('/:id', function(req, res, next) {
	Todo.findByIdAndRemove(req.params.id, req.body, function (err, data) {
		res.json(err ? err : data);
	});
});

module.exports = router;
