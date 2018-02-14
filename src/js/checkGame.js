
function checkGame(card) {
	  if (firstCard === null) {
	    firstCard = card;
	    return;
	  }
	  if(firstCard.color == card.color) {
	  	countMatch = countMatch + 2;
	  	card.lock();
	    firstCard.lock();
	    if(countMatch === countCards){
	    	setTimeout(function() {
	      	game.style.display = 'none';
	    	}, 300);
				setTimeout(function() {
					timer.classList.add('hidden');
					document.body.children[5].style.display = 'block';
					resetButton.style.display = 'none';
	    	}, 400);
			}
	  } else {
	    let a = firstCard;
	    let b = card;
	    setTimeout(function() { 
	      a.reset();
	      b.reset();
	      firstCard = null;
	    }, 400);
	  }
	  firstCard = null;
	}