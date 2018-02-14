// create veriables to save choosen color and count of cards
	let chooseSkirt;
	let countCards;
// create array to save instance of our cards
	let gameSquares = [];
	// save skirt`s colors in array
	let colors = [];
	for (let i = 0; i < 6; i++) {
  colors.push("suitCard-"+i);
	}
	// check result of game
	let firstCard = null;
	let countMatch = 0;

