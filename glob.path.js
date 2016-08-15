var path = require('path')
var fs = require("fs")
var glob = require("glob")


var applicationRoot = __dirname.replace(/\\/g,"/"),
  mockRootPattern = applicationRoot + '/mocks/api/**/*.?(js|json)';

var files = glob.sync(mockRootPattern);
console.log('files---------------',files);

files.map(function(file) {
  console.log(path.basename(file, path.extname(file)));
});
