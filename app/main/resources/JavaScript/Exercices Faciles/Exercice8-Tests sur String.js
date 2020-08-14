function afficherTaille(mot) {
    if (mot.length < 8) {
        console.log("Le mot contient " + mot.length + " caracteres");
    } else {
        console.log("Le mot fait plus de 8 caracteres");
    }
}

var mot1 = "Marc";
var mot2 = "Gwendoline";

afficherTaille(mot1);
afficherTaille(mot2);