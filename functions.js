'use strict';
var unirest = require("unirest");
const request = require('request');
var token = require('./token.txt');

function defaultFunction(sender) {
  var text = "Type the feature's number\n" +
    "\n1 - Infos" +
    "\n2 - Bar & club map" +
    "\n3 - Chuck Norris joke" +
    "\n4 - Good advice" +
    "\n5 - Horoscope";
  sendText(sender, text);
}

function secretFunction(sender) {
  var text = "You found a secret ! Send password 'cookiesforever' to Olivier to receive your surprise!"
  sendText(sender, text);
}

function infosFunction(sender) {
  var text = "Chatbot developed by Olivier.\nDon't hesitate to suggest new ideas ;) \n\nSource code: \nhttps://github.com/olivierboudjema/chatbot"
  sendText(sender, text);
}

function mapFunction(sender) {
  var text = "Best bars and clubs in Paris!\n\nhttps://www.google.com/maps/d/edit?mid=1e_SwsHjFXKhq97HYK0B-BjXotkw&ll=48.85944730547523%2C2.3249714547881695&z=13"
  sendText(sender, text);
}

function jokesFunction(sender) {
  var req = unirest("GET", "https://api.chucknorris.io/jokes/random");
  req.end(function (res) {
    var joke = res.body.value;
    sendText(sender, joke);
  });
}

function adviceFunction(sender) {
  var req = unirest("GET", "https://api.adviceslip.com/advice");
  req.end(function (res) {
    var advice = JSON.parse(res.body).slip.advice;
    sendText(sender, advice);
  });
}

function displayAstroSign(sender) {
  var astroList = "Write your sign name\n\nAries \nTaurus \nGemini \nCancer \nLeo \nVirgo \nLibra \nScorpio \nSagittarius \nCapricorn \nAquarius \nPisces"
  sendText(sender, astroList);
}

function horoscopeFunction(sender, signeName) {
  var req = unirest("GET", "http://sandipbgt.com/theastrologer/api/horoscope/" + signeName + "/today/");
  req.end(function (res) {
    var text = JSON.parse(res.raw_body).horoscope;
    text = text.substring(0, text.indexOf('(c)'));
    sendText(sender, text);
  });
}

function PostRequest(messageData, sender) {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: { access_token: token },
    method: "POST",
    json: {
      recipient: { id: sender },
      message: messageData,
    }
  }, function (error, response, body) {
    if (error) {
      console.log("sending error")
    } else if (response.body.error) {
      console.log("response body error")
    }
  })
}

function sendButton(sender, text, title) {
  let messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": text,
        "buttons": [
          {
            "type": "",
            "url": "https://www.messenger.com",
            "title": title,

          }
        ]
      }
    }
  };
  PostRequest(messageData, sender);
}

function sendText(sender, text) {
  let messageData = { text: text }
  PostRequest(messageData, sender);

}

module.exports = {
  infosFunction: infosFunction,
  mapFunction: mapFunction,
  jokesFunction: jokesFunction,
  adviceFunction: adviceFunction,
  secretFunction: secretFunction,
  defaultFunction: defaultFunction,
  horoscopeFunction: horoscopeFunction,
  displayAstroSign: displayAstroSign
}

// let isMale = var options = { method: 'GET', url: 'https://api.genderize.io/', qs: { name: userName } };