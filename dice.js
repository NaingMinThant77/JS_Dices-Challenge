
// Generate a random number between 1 and 6 for each player
var player1Number = Math.floor(Math.random() * 6) + 1;
var player2Number = Math.floor(Math.random() * 6) + 1;

// Set the image sources for the dice images
var player1ImageSource = "./images/dice" + player1Number + ".png";
var player2ImageSource = "./images/dice" + player2Number + ".png";

// Change the image sources in the HTML
document.querySelector(".img1").setAttribute("src", player1ImageSource);
document.querySelector(".img2").setAttribute("src", player2ImageSource);

// Determine the winner
if (player1Number > player2Number) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (player1Number < player2Number) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}

