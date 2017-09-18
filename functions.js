'use strict';

let infosFunction = function(){
  var text = "Chatbot developed by Olivier. Don't hesitate to ask questions and suggest new ideas :) \nHere is the source code: \nhttps://github.com/olivierboudjema/chatbot"
  return text;
}

let mapFunction = function(){
  var text = "Improvements weeks to weeks!\nhttps://www.google.com/maps/d/edit?mid=1e_SwsHjFXKhq97HYK0B-BjXotkw&ll=48.85944730547523%2C2.3249714547881695&z=13"
  return text;
}

let ideaFunction = function(){
  var text = "Just write here your are idea :) \n Thx in advance! It will be read very soon."
  return text;
}


module.exports = {
	 infosFunction : infosFunction,
   mapFunction : mapFunction,
   ideaFunction : ideaFunction
	}
