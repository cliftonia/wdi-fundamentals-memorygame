var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	cardsInPlay.pop();
	console.log("User flipped" + cards[cardId]);
}



if (cardsInPlay.length === 2) {

} else {

}