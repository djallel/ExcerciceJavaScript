var readline = require("readline-sync");

var nom = readline.question("Quel est votre nom ? ");
var prenom = readline.question("Quel est votre prenom ? ");
var age = parseInt(readline.question("Quel est votre age ? "));

var txt = "--------------------------------- \n";
txt += "-----------BIENVENUE------------- \n";
txt += "--------------------------------- \n";

txt += "Votre nom est : " + nom + "\n";
txt += "Votre prenom est : " + prenom + "\n";
txt += "Vous avez " + age + " ans\n";

console.log(txt);