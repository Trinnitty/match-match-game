
 function chooseCard(event){
			let k = event.target.className;
			if(k == 'skirt-1' || k == 'skirt-2' || k == 'skirt-3'){
				chooseSkirt = event.target.className;
			}
			if(k == 'difficult-1' ){
				countCards = 12;
			}
			if(k == 'difficult-2'){
				countCards = 18;
			}
			if(k == 'difficult-3' ){
				countCards = 24;
			}
	}