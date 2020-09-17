var readline = require("readline-sync");

var saisie = 0;

do{
    console.log("Vous n'avez pas saisi le bon chiffre...");
    saisie = parseInt(readline.question("Saisir le chiffre 3 : "));
} while(saisie !== 3)

console.log("Bravo ! vous avez saisi un 3");