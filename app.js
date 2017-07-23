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
	console.log("teeeeeeeeeeeeeeeeeest " + compteur);
	compteur++;
})

//let access_token = "EAABwYHYpXLoBAHjdMpnud6mghexpMxPWPN5scNGTlYbLXOTRDxLWHThkJo3i0ZCZCWvQBfhTuYZAxyRRbWRsBUEqFI4kH71n4f4olvjPUDbhethAEcvejWjZCQWeWm9i5si5m6lXHYbtBouD4hZBD2KIbJ6IhV39CEe3EoBxPGgZDZD"

// Facebook

app.get('/webhook', function(req, res) {
	console.log("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
	compteur = compteur + 1000;
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === "olboubou") {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

app.post('/webhook', function (req, res) {
  var data = req.body;
	console.log("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});



function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  if (messageText) {

    // If we receive a text message, check to see if it matches a keyword
    // and send back the example. Otherwise, just echo the text we received.
    switch (messageText) {
      case 'generic':
        sendGenericMessage(senderID);
        break;

      default:
        sendTextMessage(senderID, messageText);
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
}

function sendTextMessage(recipientId, messageText) {
	console.log("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}

function callSendAPI(messageData) {
	console.log("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: "EAABwYHYpXLoBAHjdMpnud6mghexpMxPWPN5scNGTlYbLXOTRDxLWHThkJo3i0ZCZCWvQBfhTuYZAxyRRbWRsBUEqFI4kH71n4f4olvjPUDbhethAEcvejWjZCQWeWm9i5si5m6lXHYbtBouD4hZBD2KIbJ6IhV39CEe3EoBxPGgZDZD" },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });
}

app.listen(app.get('port'), function() {
	console.log("running: port");
})
