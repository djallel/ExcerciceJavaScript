//Solution 1e qui marche ( ma solution )
/*
const aff = document.getElementById("aff");
var txt="";

function multiplier() {

    var multiplicateur =3;
    for (let i=0; i <11 ; i++){
        txt+=""+(multiplicateur +" * " +i+" = "+i*+multiplicateur)+"<br />"
    }
    aff.innerHTML=txt;
}
*/

//Solution 2
/*
const aff = document.getElementById("aff");
var txt="";

aff.addEventListener('onClick', multiplier);

function multiplier() {

    var multiplicateur =3;
    for (let i=0; i <11 ; i++){
        txt+=""+(multiplicateur +" * " +i+" = "+i*+multiplicateur)+"<br />"
    }
    aff.innerHTML=txt;
}
*/

const aff = document.getElementById("aff");
const but = document.getElementById("but");
var txt = "";

but.addEventListener('click', function () {
    var multiplicateur = 3;
    for (let i = 0; i < 11; i++) {
        txt += "" + (multiplicateur + " * " + i + " = " + i * +multiplicateur) + "<br />";
    }
    aff.innerHTML = txt;
});