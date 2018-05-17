'use strict';


const fs = require('fs');
// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (paths, callback) => {
  
  fs.readFile(paths + filename, 'utf-8', (err, content) => {
    console.log(paths+filename);
    if ( err ) { throw err; }
    callback(filename, content);
  });

};

