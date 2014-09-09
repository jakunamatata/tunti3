var fs = require('fs');
date = new Object();

exports.getTimeStamp = function(path, callback) {
		fs.exists(path, function(exists) { 
			if (exists) { 
				fs.stat(path,function(err, stats) {
					if(!err) {
						callback(stats.mtime);
						return date;
					}
				});
			} else {
				console.log("File does not exist");
			}
		}); 
}