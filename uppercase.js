<<<<<<< HEAD
'use strict';
=======
>>>>>>> pb/master

let toUpperCaseFonction = function(text){
  let text2 = ""
  var nb_car = text.length;
  var tableau = text.split("");
  console.log(nb_car);
  console.log(tableau);
<<<<<<< HEAD
  for (var i=0; i<nb_car; i++) {
=======
  for (i=0; i<nb_car; i++) {
>>>>>>> pb/master
    if(i%2 == 0)  {
      text2 = text2 + tableau[i].toUpperCase();
    }
    else {
<<<<<<< HEAD
      text2 = text2 + tableau[i].toLowerCase();
=======
      text2 = text2 + tableau[i];
>>>>>>> pb/master
    }
  }
  return text2;
}

module.exports = {
	 toUpperCaseFonction : toUpperCaseFonction
	}
