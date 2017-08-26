'use strict';

var FB = require('fb');
FB.setAccessToken('EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD');

var info = "Rob";

var getThirdPartyID = function (thirdPartyIDCallback) {

    return FB.api("561460630644364", //   id.toString() // 10207039856412582 // 2111089705785301
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

//getThirdPartyID(handleThirdPartyID);

	module.exports = {
	 getThirdPartyID : getThirdPartyID
}
