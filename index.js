var randomNumber1 = Math.floor(Math.random() * 6) + 1; //(0-5) + 1 = 0-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //(0-5) + 1 = 0-6

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

//Select all elements with the tag "img" and set its "src" attritube to our new image
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


//Displaying winner text
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Tie!";
}