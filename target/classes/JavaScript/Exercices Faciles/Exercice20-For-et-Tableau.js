var tab = [2,6,10,3,8,7,20];
var total=0;
ccalculeNombrePaire(tab);

function ccalculeNombrePaire(tab) {
    for ( i=0 ; i<tab.length ; i++){

        if(tab[i]%2===0){
            total+=tab[i];
        }

    }
console.log(total)
    return total;
}

