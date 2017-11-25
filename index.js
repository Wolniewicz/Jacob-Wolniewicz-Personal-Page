'use strict';
var fs = require('fs');

 exports.get = function(event, context) {
   console.log(event);
   console.log(context);
   var contents = fs.readFileSync("public/index.html");
   context.succeed({
     statusCode: 200,
     body: contents.toString(),
     headers: {'Content-Type': 'text/html'}
   });
 };
