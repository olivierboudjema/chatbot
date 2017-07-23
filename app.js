'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('port', (process.env.PORT || 5000));

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROUTES
let compteur = 0;
app.get('/', function(req, res) {
	res.send("Hi I am a chatbot!!!");
	console.log("caca " + compteur);
	compteur++;
});

app.get('/webhook', function(req, res) {
	console.log(req.query['hub.verify_token']);
	if (req.query['hub.verify_token'] === undefined) {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

app.post('/webhook', function(req, res) {
	console.log("teeeeeeeeeeeeeeeeeest 3");
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			let text = event.message.text
			sendText(sender, "Text echo: " + text.substring(0, 100))
		}
	}
	res.sendStatus(200)
})

function sendText(sender, text) {
	let messageData = {text: text}
	console.log("teeeeeeeeeeeeeeeeeest 4");
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: "EAABwYHYpXLoBAPzoe9g6zIrXVBftR9pCEMrijvtoZBg3yhch0ILsX5PQNjhbzxvK6GToqZBXx9gfGmZBRLXptEOcXZCC9GsjZCmnN1aNuS5e35QoRMNEETOPQBpoKmfbJMr7zkmBZAozuT6BOyct2VFEO9R0e94UPw5Tm1jpcZC3wZDZD"},
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
