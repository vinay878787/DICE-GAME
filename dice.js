//first dice
let random1 = Math.floor(Math.random() * 6) + 1;
let finalImage1 = "images/dice" + random1 + ".png";
let changingImage1 = document.querySelectorAll("img")[0];

changingImage1.setAttribute("src", finalImage1);

//second dice
let random2 = Math.floor(Math.random() * 6) + 1;
let finalImage2 = "images/dice" + random2 + ".png";

let changingImage2 = document.querySelectorAll("img")[1];
changingImage2.setAttribute("src", finalImage2);

//decider
if (random1 > random2) {
  let winner = document.getElementById("decider");
  winner.innerHTML = "Player 1 wins";
} else if (random1 < random2) {
  let winner = document.getElementById("decider");
  winner.innerHTML = "Player 2 wins";
} else {
  let winner = document.getElementById("decider");
  winner.innerHTML = "Its a Draw";
}
