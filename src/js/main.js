
		// listen click on first button and open playing field
		let playGame = document.getElementById('playGame');
		playGame.addEventListener("click", handler);

		let header = document.getElementById('header');
		header.addEventListener("click", chooseCard);

	// listen click on button new Game
		let playNewGame = document.getElementById('playNewGame');
		playNewGame.addEventListener("click", GamePlay);
	// reset current game
		let resetButton = document.getElementById("reset-button");
		resetButton.addEventListener("click", clearGame);
	

