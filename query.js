'use strict';

// token ol EAACEdEose0cBAHw67iBEGKpgiZAZBXqmAYEsT1lQw6QDYm0oqZCt5LRR0siWFN9DZAOzhZBIWDa21N2sZAgu3U3xsw41EUgwXIlfFtTxJNF7Iq73bAJHp3w51k7OK0oJN4F3U8vvdktMh9cQytd7uYWAcsph07DFeoN9fEs2UBCLyHDjbe5k58Sagc2WI50vsZD
// token bot EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD
// token roy EAACEdEose0cBAGiogxYWjC90ViL0oOnP7WmOazJyo8iJS4pd6tCvwHKt824U18ZByPX5Li5kvzgKg8YCLkZCDsJUAO1ejJM0SRufW560RC3lE5wXREs6AvARb3ZBRThPIKynTdtSd7AT4PJ1jsbSOD2Et2ZCKAldH7Y0huJoYvbfZAQ5X5nahU0HHpRHP5ZCsHNnfu0ctf7QZDZD

let queryFunction = function(id){
	var FB = require('fb');
	FB.setAccessToken('EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD');

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

//console.log(queryFunction(10207039856412582));

//https://graph.facebook.com/v2.10/10207039856412582/?fields=name&access_token=EAACEdEose0cBADaq5D9Fy13NaZBaXZBOKnUGuvrezuJqM4wNzRCJ3kzCxQRisVNXoBrykZB1qZCvZAgZCumPsZARFiOSYOJG31VrwHQaZAIZBBQm3STF1p2D0gvxpZBScBOi5qP5ZBIouZCOgGNRBfrB4nXUebiTxHhQrmzhMzmeWLOLJrTiH9eughkXEamlgZBZBxnzZCjK8p8qy50ZBgZDZD

//https://graph.facebook.com/v2.10/561460630644364?access_token=EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD
