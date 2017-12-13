'use strict';
var readline = require('readline');

let infosFunction = function(){
  var text = "Chatbot developed by Olivier. Don't hesitate to ask questions and suggest new ideas :) \nHere is the source code: \nhttps://github.com/olivierboudjema/chatbot"
  return text;
}

let mapFunction = function(){
  var text = "Improvements weeks to weeks!\nhttps://www.google.com/maps/d/edit?mid=1e_SwsHjFXKhq97HYK0B-BjXotkw&ll=48.85944730547523%2C2.3249714547881695&z=13"
  return text;
}

let ideaFunction = function(){
  var text = "Just write here your idea :) \nThx in advance! It will be read very soon."
  return text;
}

let  random = function(low, high) {
    return Math.random() * (high - low) + low;
}
var nb_rng = Math.round(random(0,100));
console.log(nb_rng);

let gameHLFunction = function(text, time){

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What do you think of Node.js? ', (answer) => {
    var nb_user = Number($answer);
    if(nb_user > nb_rng) { console.log("more!");  }
    if(nb_user > nb_rng) { console.log("less!");  }
    if(nb_user == nb_rng) { console.log("Well played!");  }
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
  });
  return text;
}

module.exports = {
	 infosFunction : infosFunction,
   mapFunction : mapFunction,
   ideaFunction : ideaFunction,
   gameHLFunction : gameHLFunction
	}

gameHLFunction("text", "time");
