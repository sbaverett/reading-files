var fs = requre('fs');

var options = {encoding: 'utf8'};

var start = Date.now();
fs.readFile('./file1', options, function(err, contents) {
	// console.log(err);
	// console.log(contents);
	// console.log('took %s milliseconds to read', Date.now()- start);


});

