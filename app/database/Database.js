var mongoDb = require('mongoose');

module.exports = {
	connect : function(connection, status){
		mongoDb.connect(connection, function(err) {
			status(err ? err : true);
		});
	}
};
