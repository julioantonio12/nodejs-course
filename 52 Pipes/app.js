var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/greet.txt");

var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

var compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");

//creates a transform stream (writable and readable) and compress it
var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed); 