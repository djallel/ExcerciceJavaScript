var addition = 0;

for(var i = 10 ; i >= 1; i--){
    addition += i;
    console.log("Etape " + i + " : " + addition);
}
console.log("Le résultat des 10 premiers chiffres est égal à " + addition);