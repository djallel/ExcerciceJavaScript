var readline = require('readline-sync');

var valeurSaisie = parseInt(readline.question("Quelle nombre voulez vous saisir? "));
afficherResultatDivisionPar3(valeurSaisie);


function ifDivisiblePar3() {
    return valeurSaisie % 3 === 0;
}

function afficherResultatDivisionPar3(chiffre) {
        if(ifDivisiblePar3()){
            console.log("le nombre saisie est divisble sur 3");
        }else {
            console.log("non divisble par 3");
        }
    }