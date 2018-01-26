var playGame = prompt("Do you want to play a game with two characters?");
if (playGame.toLowerCase() === "yes") {
	var userName = prompt ("What do you want to name your character?");
}

var grantHealth = 10;
var userHealth = 40;
var grantLives = 3;
var userWins = 0;
var grantWins = 0;

while (userHealth > 0 && grantHealth > 0 && grantLives > 0) {
	var damage = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
	userHealth -= damage;
	grantHealth -= damage;
	console.log(userName + " has " + userHealth + " health left.")
	console.log("The Almight Grant has " + grantHealth + " health left.")
	if (grantHealth  < 1) {
		grantLives --;
		userWins ++;
		console.log("THE ALMIGHTY GRANT HAS " + grantLives + " LIVES LEFT.");
		grantHealth = 10;
	}
}

if (grantLives === 0) {
	console.log(userName + " is the winner!");
} else if (userHealth === 0) {
	console.log("The Almighty Grant is the winner!");
}