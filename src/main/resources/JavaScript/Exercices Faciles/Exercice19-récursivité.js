var readline = require("readline-sync");

var saisie = parseInt(readline.question("Factorelle : "));
var resultat = factorielle(saisie);

console.log("Le résultat de la factorielle de " + saisie + " est " + resultat);

function factorielle(factoriel) {

    if(factoriel>1){
        console.log(factoriel*(factorielle(factoriel-1)))
        return factoriel*(factorielle(factoriel-1));
    }else {
        console.log("1")
        return 1;
    }


}
