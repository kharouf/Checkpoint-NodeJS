// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
// fs.writeFile('welcome.txt', 'Hello Node', function (err,data) {
//   err? console.log(err) : console.log(data);
// });
  fs.readFile('welcome.txt', function (err,data) {
    err? console.log(err) : console.log(data.toString());
  });
