
function clearGame() {
  gameSquares.forEach(function(gameSquare) {
    gameSquare.reset();
  });
		setTimeout(function() {
	    resetButton.classList.add('click');
	  }, 800);
		setTimeout(function() {			
			timer.remove();
			game.remove();
	    resetButton.style.display = 'none';
			header.style.display = "block";
			header.children[2].classList.remove('hidden');
			header.children[3].classList.remove('hidden');
			document.body.children[2].style.display = "block";
			playNewGame.classList.remove('hidden');
			resetButton.classList.remove('click');
	  }, 400);
	  chooseSkirt = undefined;
		countCards = undefined;
 }
 