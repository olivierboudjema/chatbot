'use strict';
var token = require('./token.txt');

var FB = require('fb');
FB.setAccessToken(token);

var info = "Rob";
var id = 1;

var getThirdPartyID = function (thirdPartyIDCallback, id) {

    return FB.api(id, //   id.toString() // 10207039856412582 // 2111089705785301 // 1513993172013437
	  'GET',
	  {	 },
	  function (userData) {
      //console.log("Your Facebook ThirdPartyId is: " + userData.first_name);
      thirdPartyIDCallback(userData.first_name);
    });
}

var handleThirdPartyID = function(thirdPartyID){
  // do something with thirdPartyID
  info = thirdPartyID
  console.log(thirdPartyID);
}

getThirdPartyID(handleThirdPartyID, "1513993172013437");

	module.exports = {
	 getThirdPartyID : getThirdPartyID
}
