var mod1 = require('./mod1.js');
var path = 'mod2.js';
var date = mod1.getTimeStamp(path, function(date) {
	console.log("Last modified: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
});


