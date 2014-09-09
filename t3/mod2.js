var mod1 = require('./mod1.js');
var strftime = require("strftime");
var path = 'mod2.js';

var format = function (date) {
	return strftime("%H:%M %d.%m.%Y", date)
}

var date = mod1.getTimeStamp(path, function(date) {
	console.log("Last modified: " + format(new Date(date)));
});


