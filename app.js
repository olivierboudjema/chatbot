'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var FB = require('fb');
var fs = require('fs');

require.extensions['.txt'] = function (module, confidentialite) {
  module.exports = fs.readFileSync(confidentialite, 'utf8');
};

FB.setAccessToken("");

const app = express();

var confidentialite_text = require("./confidentialite.txt");
let functions = require('./functions.js');
let astroList = require('./astroList.json');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send("Hi I am a chatbot!!!");
});

app.get('/confidentialite', function (req, res) {
  res.send(confidentialite_text);
});

app.get('/canvas', function (req, res) {
  res.sendFile(__dirname + '/canvas.html');
});

app.get('/webhook', function (req, res) {
  console.log("token : " + req.query['hub.verify_token']);
  if (req.query['hub.verify_token'] === "abc") {
    res.send(req.query['hub.challenge'])
  }
  res.send("Wrong token")
})

app.post('/webhook', function (req, res) {

  let messaging_events = req.body.entry[0].messaging
  for (let i = 0; i < messaging_events.length; i++) {

    let event = messaging_events[i]
    let sender = event.sender.id

    if (event.message && event.message.text) {
      if (astroList.signs.some(item => item.name === event.message.text.toLowerCase())) {
        functions.horoscopeFunction(sender, event.message.text.toLowerCase())
      } else {
        switch (event.message.text) {
          case "0":
            functions.secretFunction(sender);
            break;
          case "1":
            functions.infosFunction(sender);
            break;
          case "2":
            functions.mapFunction(sender);
            break;
          case "3":
            functions.jokesFunction(sender);
            break;
          case "4":
            functions.adviceFunction(sender);
            break;
          case "5":
            functions.displayAstroSign(sender);
            break;
          default:
            functions.defaultFunction(sender)
            break;
        }
      }
    }
  }
  res.sendStatus(200)
})

app.listen(app.get('port'), function () {
  console.log("running: port");
})
