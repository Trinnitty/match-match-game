
// create class for cards
class Card{
		constructor(el,color){
			this.el = el;
		  this.isOpen = false;
		  this.isLocked = false;
		  this.el.addEventListener("click", this, false);
		  this.setColor(color);
		}
	// listen click and change state of card
	handleEvent(e) {
  	switch (e.type) {
    case "click":
      if (this.isOpen || this.isLocked) {
        return;
      }
      this.isOpen = true;
      this.el.children[0].classList.add('flip');
      this.el.children[0].style.transform = 'rotateY(180deg)';
      checkGame(this);
  	}
	}
	// reset game state
	reset() {
	  this.isOpen = false;
	  this.isLocked = false;
	  this.el.children[0].classList.remove('flip');
	  this.el.children[0].style.transform = '';
	}
	// lock cards 
	lock() {
	  this.isLocked = true;
	  this.isOpen = true;
	  let self = this;
	  setTimeout(function() {
	      self.el.children[0].classList.add('hidden');
	      self.el.classList.add('noShadow');
	  }, 500);
	}
	// set color of suit
	setColor(color) {
	  this.el.children[0].children[1].classList.remove(this.color);
	  this.color = color;
	  this.el.children[0].children[1].classList.add(color);
	}
}