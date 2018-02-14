
 function handler(){
		setTimeout(function() {
	     playGame.classList.add('click');
	  }, 600);
		setTimeout(function() {
	      	playGame.classList.add('hidden');
	      	header.style.display = "block";
					document.body.children[2].style.display = "block";
	    	}, 400);
	}