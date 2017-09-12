'use strict';

var users = require('./users.json');
var fs = require('fs');

fs.readFile('users.json',function(err,content){
  if(err) throw err;
  var parseJson = JSON.parse(content);
  // for (var i=0; i <11 ; i++){
   parseJson.user.push({  "id": "123", "first_name":"Franck3", "last_name": "Ribery" })
  // }
  fs.writeFile('users.json',JSON.stringify(parseJson),function(err){
    if(err) throw err;
  })
})
