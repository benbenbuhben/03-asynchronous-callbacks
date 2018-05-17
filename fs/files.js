'use strict';

let fs = require('fs');
const reader = require('../file-reader-module/lib/reader.js');

let dir = `${__dirname}/files/`;

function readFiles(paths, callback) {
  fs.readdir(paths, (err, filenames) => {
    console.log(filenames);
    if ( err ) { throw err; }
    filenames.forEach(filename => {
      console.log(filename);
      reader(filename, )
    });
  });
}

var data = [];
readFiles(dir, (filename, content) => {
  data.push(content);
  console.log(data);
});
console.log(data)



