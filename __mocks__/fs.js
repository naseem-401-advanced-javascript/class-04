/* eslint-disable no-undef */
/* eslint-disable strict */
'use strict';
module.exports = exports = {};
var fileContents = '';

exports.readFile = (file,cb)=>{
  if(file.match(/bad/i)){
    cb('Invalid File');
  }else{
    cb(undefined,Buffer.from(fileContents));
  }
};
exports.writeFile = (file,Buffer,cb)=>{
  if(file.match(/bad/i)){
    cb('Invalid File');
  }else{
    fileContents = buffer;
    cb(undefined,true);
  }
};