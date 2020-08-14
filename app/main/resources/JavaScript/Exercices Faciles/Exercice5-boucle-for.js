var readline = require('readline-sync');

var multiplicateur = parseInt(readline.question("Quelle table de multiplication voulez vous afficher ? "));

for (let i = 0; i < 11; i++) {
    console.log(multiplicateur + " * " + i + " = " + i * +multiplicateur);
}