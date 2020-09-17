var readline =  require('readline-sync');

var c = 2;
var puissance = parseInt(readline.question("Puissance voulue ? "));

console.log(c + " à la puissance " + puissance + " = " + Math.pow(c,puissance));
