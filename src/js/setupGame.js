
// function to start game
function setupGame() {
	  let array = document.getElementsByClassName("card");
	  let randomColors = getSomeColors();            
	  for (let i = 0; i < array.length; i++) {  
	    let color = randomColors.pop();
	    gameSquares.push(new Card(array[i], color));
	  }
	}