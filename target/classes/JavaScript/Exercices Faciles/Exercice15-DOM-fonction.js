/*const aff = document.getElementById("aff");
const but = document.getElementById("but");

but.addEventListener('click', function  () {
if (aff.innerHTML==="pile"){

    aff.innerHTML="face";

}else{
    aff.innerHTML="pile";
}
});
*/

$("#but").on("click", function (){
    $("#aff").html(pileOuFace());
});


function pileOuFace(){
    var random = Math.floor(Math.random() * 2);
    return (random >= 1) ? "face" : "pile";
}