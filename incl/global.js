//Global variables
const cardDeck = document.getElementById('deck');
const btnAdd = document.getElementById('add');
const btnRmv = document.getElementById('remove');

//Create initial deck
const arr = [
	{"title":"Deck of navigation cards with a large image", "text":"This card has a large image."},
	{"title":"Network cameras", "text":"This card has a larger image. Nulla erit controversia. Ille enim occurrentia nescio quae."},
	{"title":"Network cameras", "text":"This card has a larger image. Certe, nisi voluptatem tanti aestimaretis."},
	{"title":"Network cameras", "text":"This card has a larger image. Er quod est munus, quod opus spientiae?"},
	{"title":"Network cameras", "text":"This card has a larger image. Sit sane ista volutpas."},
	{"title":"Network cameras", "text":"This card has a larger image. Omnis enim est natura diligens sui."},
	{"title":"Network cameras", "text":"This card has a larger image. Ut optime, secundum naturam affectum esse possit. Ut optime, secundum naturam affectum esse possit."},
];
	
for(let i = 0; i<arr.length; i++) {
	createCard(i);
}

function createCard(n) {
	const card = '<a href="#" class="link"><div class="card corner-radius shadow animate"><img class="card-head" src="img/card.jpg" alt="Card top"> <div class="card-text"> <h1>'+arr[n].title+'</h1> <p>'+arr[n].text+'</p> </div> </div><div class="card-back back-1 corner-radius shadow animate"> </div><div class="card-back back-2 corner-radius shadow animate"> </div></a>';
	const tempWrapper = document.createElement('div');
	tempWrapper.innerHTML = card;
	cardDeck.appendChild(tempWrapper.firstChild);
}

//Buttons
btnAdd.addEventListener("click", add);
btnRmv.addEventListener("click", remove);
	
function add() {
	if (cardDeck.childElementCount >= 1) {
		cardDeck.appendChild(cardDeck.firstElementChild.cloneNode(true));
	} else {
		createCard(0);
	}
}
	
function remove() {
	cardDeck.removeChild(cardDeck.lastChild);
}

