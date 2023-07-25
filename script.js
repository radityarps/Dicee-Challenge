// Button to Roll
var button = document.getElementById("rollbtn");
function randomNumbers() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  return randomNumber1;
}
button.addEventListener("click", getRoll); // End Here.

// Get roll
function getRoll() {
  randomNumbers;
  dicePlayer1.setAttribute("src", "./images/dice" + randomNumbers() + ".png");
  dicePlayer2.setAttribute("src", "./images/dice" + randomNumbers() + ".png");
}

var dicePlayer1 = document.querySelectorAll("img")[0];
var dicePlayer2 = document.querySelectorAll("img")[1];
