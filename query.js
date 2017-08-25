'use strict';

let queryFunction = function(id){

	var FB = require('fb');

	FB.setAccessToken('EAACEdEose0cBAPO23jEFXfPjVMEbtOHNCY0cYqwrajG2CCgrU5ERnrhPSVxmYk8hip1ZAsyd6sgpBrpCAPZBUSPMNlZAYqiegderX4GSjChkpuueDvuyZBWfB92uaPAQDwGbJOv22XbRPeWOboJrxek64643GYQ6lkYg1ZBn9J2LltRFW8i5WnTBklUXPNrdHnVoK0cB5mQZDZD');


	FB.api(
	  id.toString(), // 10207039856412582
	  'GET',
	  {	"fields":"id,first_name, gender" },
	  function(response) {
	  	console.log(response.first_name + " " +  response.gender);	 
	  });

}

module.exports = {
	 queryFunction : queryFunction
	}


