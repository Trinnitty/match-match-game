
// set count of skirts
function getSomeColors() {
		 	let colorscopy;
		 	if(countCards == 12){
		 		colorscopy = colors.slice();
		 		colorscopy = colorscopy.concat(colors.slice());
		 	}
		 	if(countCards == 18){
		 		colorscopy = colors.slice();
		 		colorscopy = colorscopy.concat(colors.slice());
		 		colorscopy = colorscopy.concat(colors.slice());
		 	}
		 	if(countCards == 24){
		 		colorscopy = colors.slice();
		 		colorscopy = colorscopy.concat(colors.slice());
		 		colorscopy = colorscopy.concat(colors.slice());
		 		colorscopy = colorscopy.concat(colors.slice());
		 	}
		  var randomColors = shuffleArray(colorscopy);
		  return randomColors;
	}