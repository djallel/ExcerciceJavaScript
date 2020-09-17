var voiture = {
    immatriculation : "AB1234CD",
    marque : "Yotota",
    annee : 2002,
    carac : {
        nbKilometre : 20000,
        couleur : "bleu",
        puissance : 7
    }
}

console.log(`La voiture d'immatriculation ${voiture.immatriculation}, 
de marque ${voiture.marque}, date de ${voiture.annee},
nombre de kilomètres : ${voiture.carac.nbKilometre},
couleur : ${voiture.carac.couleur}
`);