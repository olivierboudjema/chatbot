'use strict';

var token = require('./token.txt');

let queryFunction = function(id){
	var FB = require('fb');
	FB.setAccessToken(token);

	var idstr = id.toString();
	var info;

	FB.api(
	  idstr, //   id.toString() // 10207039856412582 // 2111089705785301
	  'GET',
	  {	 },
	  function(response) {
	  	//console.log(response.id + " " + response.first_name + " " +  response.gender);
	  	info = (response.id + " " + response.first_name + " " +  response.gender).toString();
	  });

	return info;
}

module.exports = {
	 queryFunction : queryFunction
	}
