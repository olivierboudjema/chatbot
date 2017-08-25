'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

var fs = require('fs');

require.extensions['.txt'] = function (module, confidentialite) {
    module.exports = fs.readFileSync(confidentialite, 'utf8');
};

var words = require("./confidentialite.txt");

let uppercase = require('./uppercase.js');
let query = require('./query.js');

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

//query.queryFunction(561460630644364);

app.post('/webhook', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id

		
		if (event.message && event.message.text) {
			let text = event.message.text
			text = uppercase.toUpperCaseFonction(text);
			sendText(sender, "" + "nieeeee")
			var FB = require('fb');
			FB.setAccessToken('EAABwYHYpXLoBADa7tEh4mdUZAf9x1Y3wOgRZC3fxNZBjWS9YhGr8TeTTyDx9zKk3EhrbybV9H5DNexAz5DEI6w0WgKb5wrjIj1tL8aTWBKXJHBCdpl4h4tUxWtFNKmgJGMyJW3dpShgzKnos5aUy9qZAd87T4yEIasYBHexC8wZDZD');

			var idstr = id.toString();

			FB.api(
			  sender, //   id.toString() // 10207039856412582 // 2111089705785301
			  'GET',
			  {	 },
			  function(response) {
			  	console.log(response.id + " " + response.first_name + " " +  response.gender);	 
			  	sendText(sender, "" + response.first_name.toString())
			  });
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
