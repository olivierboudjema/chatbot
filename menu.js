'use strict';

var users = require('./users.json');

//users.user.push({  "id": "113", "first_name":"Franck2", "last_name": "Ribery" })

for (var i in users.user) {
    if(users.user[i].first_name == "Franck"){
      console.log("bonjour")
    }
    console.log(users.user[i].first_name);
}
