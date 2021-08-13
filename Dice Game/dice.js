var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomImage1 = "imgs/dice" + randomNumber1 + ".jpeg";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImage2 = "imgs/dice" + randomNumber2 + ".jpeg";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "&#128681; Player 1 wins!!! &#128681;";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = "&#128681; Player 2 wins!!! &#128681;";
}
else{
    document.querySelector("h2").innerHTML = "&#128681; Tied!!! &#128681;";
}
function refreshPage(){
    location.reload();
}