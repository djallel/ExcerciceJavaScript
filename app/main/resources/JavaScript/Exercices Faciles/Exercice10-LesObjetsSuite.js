var personnage = {
    nom: "Djel",
    age: 45,
    carac: {
        cm: 20000,
        taille: "bleu"
    }
};

var readline = require('readline-sync');
var nom = readline.question("Donner un nom");
var age = readline.question("Donner un age");
var cm = readline.question("Donner un cm");
var taille = readline.question("Donner un taille");

personnage.nom = nom;
personnage.age = age;
personnage.carac.cm = cm;
personnage.carac.taille = taille;

console.log(personnage);