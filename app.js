'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var FB = require('fb');
FB.setAccessToken('EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD');


const app = express();

var fs = require('fs');

require.extensions['.txt'] = function (module, confidentialite) {
    module.exports = fs.readFileSync(confidentialite, 'utf8');
};

var words = require("./confidentialite.txt");

let uppercase = require('./uppercase.js');
//let query = require('./query.js');
let callbackquery = require('./callbackquery.js');
var users = require('./users.json');

app.set('port', (process.env.PORT || 5000));

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROUTES
let compteur = 0;

app.get('/', function(req, res) {
	res.send("Hi I am a chatbot!");
	console.log("compteur " + compteur);
	compteur++;
});

app.get('/confidentialite', function(req, res) {
	res.send(words);
});

app.get('/webhook', function(req, res) {
	console.log("token : " + req.query['hub.verify_token']);
	if (req.query['hub.verify_token'] === "abc") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})


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

getThirdPartyID(handleThirdPartyID);

app.post('/webhook', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id

		//query.queryFunction(sender);

		if (event.message && event.message.text) {
			let text = event.message.text
			text = uppercase.toUpperCaseFonction(text);
			//sendText(sender, "" + text.substring(0, 100))
      for (var j in users.user) {
          if(users.user[j].id == event.sender.id){
            sendText(sender, "" + "Hi " + info.toString() + "!!!")
            users.user.push({  "id": users.user[j].id, "first_name":users.user[j].first_name, "last_name": users.user[j].last_name })
          }
          if(compteur >= 2) {
            sendText(sender, "" + text.substring(0, 100));
            sendText(console.log(users.user[i].first_name));
          }
      }

		}
	}
	res.sendStatus(200)
})

function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: "EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD"},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: port");
})
