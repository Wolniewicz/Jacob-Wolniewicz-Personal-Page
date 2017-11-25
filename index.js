'use strict';
var fs = require('fs');

console.log('Loading lambda function for jacob.wolniewicz.com.')

// Primary get function for files
exports.get = function(event, context) {
  // Get the file name, defaulting to index.html if no file name is specified.
  var filename = event.path;
  if (filename == '/') {
    filename = '/index.html'
  }
  console.log('Received event:', JSON.stringify(event, null, 2));
  console.log('File name = "' + filename + "'")

  // Read the file from the file system.
  // TODO: Handle file-not-found in a more intelligent way, returning 404.
  var contents = fs.readFileSync("public" + filename);

  // Return success with the contents of the file.
  context.succeed({
    statusCode: 200,
    body: contents.toString(),
    headers: {'Content-Type': 'text/html'}
  });
};
