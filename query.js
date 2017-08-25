/*'use strict';

//let queryFunction = function(id){
let getThirdPartyID = function () {       

	var FB = require('fb');

	FB.setAccessToken('EAACEdEose0cBAHw67iBEGKpgiZAZBXqmAYEsT1lQw6QDYm0oqZCt5LRR0siWFN9DZAOzhZBIWDa21N2sZAgu3U3xsw41EUgwXIlfFtTxJNF7Iq73bAJHp3w51k7OK0oJN4F3U8vvdktMh9cQytd7uYWAcsph07DFeoN9fEs2UBCLyHDjbe5k58Sagc2WI50vsZD');
	
	// token ol EAACEdEose0cBAHw67iBEGKpgiZAZBXqmAYEsT1lQw6QDYm0oqZCt5LRR0siWFN9DZAOzhZBIWDa21N2sZAgu3U3xsw41EUgwXIlfFtTxJNF7Iq73bAJHp3w51k7OK0oJN4F3U8vvdktMh9cQytd7uYWAcsph07DFeoN9fEs2UBCLyHDjbe5k58Sagc2WI50vsZD
	// token bot EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD
	// token roy EAACEdEose0cBAGiogxYWjC90ViL0oOnP7WmOazJyo8iJS4pd6tCvwHKt824U18ZByPX5Li5kvzgKg8YCLkZCDsJUAO1ejJM0SRufW560RC3lE5wXREs6AvARb3ZBRThPIKynTdtSd7AT4PJ1jsbSOD2Et2ZCKAldH7Y0huJoYvbfZAQ5X5nahU0HHpRHP5ZCsHNnfu0ctf7QZDZD
	
	var idstr = id.toString();

	FB.api(
	  idstr, //   id.toString() // 10207039856412582 // 2111089705785301
	  'GET',
	  {	"fields":"id,first_name, gender" },
	  function(response) {
	  	console.log(response.id + " " + response.first_name + " " +  response.gender);	 
	  	GetUserData(userData["third_party_id"]);
	  });

}

module.exports = {
	 //queryFunction : queryFunction
	}


function GetUserData(val){
 alert(val);
}

//getThirdPartyID();
//queryFunction("dd");


//https://graph.facebook.com/v2.10/10207039856412582/?fields=name&access_token=EAACEdEose0cBAHw67iBEGKpgiZAZBXqmAYEsT1lQw6QDYm0oqZCt5LRR0siWFN9DZAOzhZBIWDa21N2sZAgu3U3xsw41EUgwXIlfFtTxJNF7Iq73bAJHp3w51k7OK0oJN4F3U8vvdktMh9cQytd7uYWAcsph07DFeoN9fEs2UBCLyHDjbe5k58Sagc2WI50vsZD

*/