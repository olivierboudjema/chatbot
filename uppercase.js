
let toUpperCaseFonction = function(text){
  let text2 = ""
  var nb_car = text.length;
  var tableau = text.split("");
  console.log(nb_car);
  console.log(tableau);
  for (i=0; i<nb_car; i++) {
    if(i%2 == 0)  {
      text2 = text2 + tableau[i].toUpperCase();
    }
    else {
      text2 = text2 + tableau[i];
    }
  }
  return text2;
}

module.exports = {
	 toUpperCaseFonction : toUpperCaseFonction
	}
