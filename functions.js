'use strict';

let infosFunction = function(){
  var text = "Chatbot developed by Olivier. Don't hesitate to ask questions and suggest new ideas :) \nHere is the source code: \nhttps://github.com/olivierboudjema/chatbot"
  return text;
}

let mapFunction = function(){
  var text = "Improvements weeks to weeks!\n https://www.google.com/maps/d/edit?mid=1e_SwsHjFXKhq97HYK0B-BjXotkw&ll=48.85528684451266%2C2.340592640090904&z=13"
  return text;
}


module.exports = {
	 infosFunction : infosFunction,
   mapFunction : mapFunction
	}
