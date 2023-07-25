// generate Random Number
var button = document.getElementById("rollbtn");
function randomNumbers1() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  return randomNumber1;
}
function randomNumbers2() {
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  return randomNumber2;
}
// Get roll
function getRoll() {
  randomNumbers1;
  randomNumbers2;
  dicePlayer1.setAttribute("src", "./images/dice" + randomNumbers1() + ".png");
  dicePlayer2.setAttribute("src", "./images/dice" + randomNumbers2() + ".png");
}
var dicePlayer1 = document.querySelectorAll("img")[0];
var dicePlayer2 = document.querySelectorAll("img")[1];
// Get roll button
button.addEventListener("click", getRoll); // End Here.

var title = document.querySelectorAll("h1")[0];

function whosWin() {
  if (randomNumbers1 > randomNumbers1) {
    title.textContent = "Player 1 Win!";
  } else if (randomNumbers1 < randomNumbers1) {
    title.textContent = "Player 2 Win!";
  } else {
    title.textContent = "Draw, Keep Rolling!";
  }
}
