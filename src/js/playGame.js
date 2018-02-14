
function GamePlay(){
	
		if(countCards == undefined){
			countCards = 12;
		}
		if(chooseSkirt == undefined){
			chooseSkirt = 'skirt-1';
		}
		setTimeout(function() {
	     playNewGame.classList.add('click');
	  }, 800);
		
		// remove all from the field
		playNewGame.classList.add('hidden');
		header.children[2].classList.add('hidden');
		header.children[3].classList.add('hidden');
		document.body.children[2].style.display = "none";
		// create button to reset game
		resetButton.style.display = "block";
		// create cards according to choosen count and  skirt
		let div = document.createElement('div');
		div.id = 'game';
		// create timer
		let time = document.createElement('div');
		document.body.insertBefore(time, document.body.children[0]);
		time.insertAdjacentHTML("beforeEnd", "<div></div><div></div>");
		time.id = 'timer';
		time.children[1].innerHTML = '0';
		time.children[0].innerHTML='0';
		let seconds = setInterval(function(){
			time.children[1].innerHTML++;
			if(time.children[1].innerHTML=='60'){
				++time.children[0].innerHTML;
				time.children[1].innerHTML='0';
			}
		}, 1000);
// size of the field 
 		if(countCards==24){
 			div.style.width = '65%';
 			div.style.height = '500px';
 		}
 		if(countCards==18){
 			div.style.width = '70%';
 			div.style.height = '450px';
 		}
 		if(countCards==12){
 			div.style.width = '50%';
 			div.style.height = '400px';
 		}
 		// paste cards on the plaing field
		document.body.insertBefore(div, document.body.children[3]);
		for(let i= 0; i<countCards; i++){
				div.insertAdjacentHTML("beforeEnd", "<div><div><div>1</div><div>2</div></div></div>");
				div.children[i].className = 'card';
				div.children[i].children[0].children[0].classList.add(chooseSkirt);
				div.children[i].children[0].children[0].classList.add('front');
				div.children[i].children[0].children[1].classList.add('back');
		}
		setupGame();
}
		