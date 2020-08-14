valeur = Math.floor(Math.random() * 20);
afficheRandom(valeur);

function afficheRandom(valeur) {
    console.log(valeur);

    if (valeur < 7) {
        console.log("Petit");
    } else if (valeur <= 7 && valeur < 15) {
        console.log("Moyen");
    } else {
        console.log("Grand");
    }
}