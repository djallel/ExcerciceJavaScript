var readline = require('readline-sync');

var valeurSaisie = parseInt(readline.question("Quelle nombre voulez vous saisir? "));
bool = false;

while (!bool) {
    if (isNaN(valeurSaisie)) {
        valeurSaisie = parseInt(readline.question("Quelle nombre voulez vous saisir? "));
    } else {
        console.log("le nombre saisie est le " + valeurSaisie);
        bool = true;
    }
}