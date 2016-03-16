
function displayRules() {
	alert('Welcome to Josh\'s rendition of Blackjack.\n\n The rules are as follows:\n You must try to get as close to 21 as you can, without going over.\n\n Each card has a numerical value; 2 through 9 represent themselves, 10 through King are valued at 10, and an Ace is counted at 1 or 11, depending on which is more beneficial.\n\n You are dealt 2 cards; For the purpose of this game, both cards will be faceup, as it doesnt matter whether or not the dealer can see your cards, because they have to follow a predefined set of rules. \n\nAfter you recieve your two cards and the dealer has theirs, you may hit or stay.\n\n  If you choose hit, you are dealt another cardwhich adds to your total.\n\n  If at any point you go over 21, you lose. \n If you stay, you stick with the cards you have and whatever they total up to.\n\n  The goal is to beat the dealer.  This can be done by getting 21 exactly blackjack, getting a higher card value total than the dealer .. for example, your 20 vs their 19.. or by not going over 21 and having the dealer bust.')}
// make the array of cards.  Seeing as a casinos typically use 6 or more decks and shuffle the cards partway through, i'll use a theoretically "endless" deck, with an unlimited number of shuffled cards.
// card suits: spades = &#9824; , hearts &#9825; , clubs &#9827 , diamonds &#9826
var deck = ['A&#9824;' , '2&#9824;' , '3&#9824;' , '4&#9824;' , '5&#9824;' , '6&#9824;' , '7&#9824;' , '8&#9824;' , '9&#9824;' , '10&#9824;' , 'J&#9824;' , 'Q&#9824;' , 'K&#9824;' , 'A&#9825;' , '2&#9825;' , '3&#9825;' , '4&#9825;' , '5&#9825;' , '6&#9825;' , '7&#9825;' , '8&#9825;' , '9&#9825;' , '10&#9825;', 'J&#9825;' , 'Q&#9825;' , 'K&#9825;' , 'A&#9827;' , '2&#9827;' , '3&#9827;' , '4&#9827;' , '5&#9827;' , '6&#9827;' , '7&#9827;' , '8&#9827;' , '9&#9827;' , '10&#9827;' , 'J&#9827;' , 'Q&#9827;' , 'K&#9827;' , 'A&#9826;' , '2&#9826;' , '3&#9826;' , '4&#9826;' , '5&#9826;' , '6&#9826;' , '7&#9826;' , '8&#9826;' , '9&#9826;' , '10&#9826;' , 'J&#9826;' , 'Q&#9826;' , 'K&#9826;' ];
var dealer = [];
var player = [];
var dealerTotal = 0;
var playerTotal = 0;



//from http://jsfromhell.com/array/shuffle
function shuffle(d) {
	for(var j, x, i = d.length; i; j = parseInt(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
    return d;
}

shuffle(deck);
var shuffledDeck = shuffle(deck);


function initialDeal() {
	player.push(shuffledDeck.pop());
	dealer.push(shuffledDeck.pop());
	player.push(shuffledDeck.pop());
	dealer.push(shuffledDeck.pop());
}

function checkBlackJack(){
	if (((player[0].charAt(0) === 'A') && (player[1].charAt(0) === '1' || player[1].charAt(0) === 'J' || player[1].charAt(0) === 'Q' || player[1].charAt(0) === 'K')) ||
	 ((player[1].charAt(0) === 'A') && (player[0].charAt(0) === '1' || player[0].charAt(0) === 'J' || player[0].charAt(0) === 'Q' || player[0].charAt(0) === 'K'))) {
		document.getElementById("status").innerHTML = "You were dealt Blackjack, you win!"
		document.getElementById("dealerCard2").innerHTML = dealer[1];
	}
	else if (((dealer[0].charAt(0) === 'A') && (dealer[1].charAt(0) === '1' || dealer[1].charAt(0) === 'J' || dealer[1].charAt(0) === 'Q' || dealer[1].charAt(0) === 'K')) ||
	 ((dealer[1].charAt(0) === 'A') && (dealer[0].charAt(0) === '1' || dealer[0].charAt(0) === 'J' || dealer[0].charAt(0) === 'Q' || dealer[0].charAt(0) === 'K'))) {
		document.getElementById("status").innerHTML = "Dealer was dealt Blackjack, you lose."
		document.getElementById("dealerCard2").innerHTML = dealer[1];
	}
	else {
		for (var i = 0; i < player.length; i++) {
			if (player[i].charAt(0) === '1' || player[i].charAt(0) === 'J' || player[i].charAt(0) === 'Q' || player[i].charAt(0) === 'K') {
				playerAdd = 10;
				playerTotal =+ playerAdd;
				console.log("playerTotal = " + playerTotal + " JQK loop");
			}
			else if (player[i].charAt(0) === 'A') {
				playerAdd = 11;
				playerTotal =+ playerAdd;
				console.log("playerAdd = " + playerAdd + " A loop");
			}
			else {
			playerAdd = parseInt(player[i].charAt(0));
			playerTotal =+ playerAdd;
			console.log("playerTotal = " + playerTotal + " parse int");
			}
			if (playerTotal > 21) {
				document.getElementById("status").innerHTML = "You busted! Better luck next time."
			}
			else {
				return false;
			}
		}
		return false;
	}
}


initialDeal();
checkBlackJack();
document.getElementById("dealerCard1").innerHTML = dealer[0];
document.getElementById("playerCard1").innerHTML = player[0];
document.getElementById("playerCard2").innerHTML = player[1];



function revealDealer() {
	document.getElementById("dealerCard2").innerHTML = dealer[1];
	switch (dealer.length) {
		case 3:
			document.getElementById("dealerCard3").innerHTML = dealer[2];
			break;
		case 4:
			document.getElementById("dealerCard4").innerHTML = dealer[3];
			break;
		case 5:
			document.getElementById("dealerCard5").innerHTML = dealer[4];
			break;
		case 6:
			document.getElementById("dealerCard6").innerHTML = dealer[5];
			break;
		case 7:
			document.getElementById("dealerCard7").innerHTML = dealer[5];
			break;
		case 8:
			document.getElementById("dealerCard8").innerHTML = dealer[5];
			break;
	}
}

// function to check if the player has busted by counting the value of all their cards
function checkBustPlayer() {
	playerTotal = 0;
	for (var i = 0; i < player.length; i++) {
		if (player[i].charAt(0) === '1' || player[i].charAt(0) === 'J' || player[i].charAt(0) === 'Q' || player[i].charAt(0) === 'K') {
			playerAdd = 10;
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotal= " + playerTotal + " JQK loop");
		}
		else if (player[i].charAt(0) === 'A') {
			playerAdd = 11;
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotal = " + playerTotal + " A loop");
		}
		else {
		playerAdd = parseInt(player[i].charAt(0));
		playerTotal = playerTotal + playerAdd;
		console.log("playerTotal = " + playerTotal + " parse int");
		}
	}
	if (playerTotal > 21){
		document.getElementById("status").innerHTML = "You busted! Better luck next time."
	}
	else if (playerTotal == 21) {
	document.getElementById("status").innerHTML = "21! You win!"
	}
	else {
		return false;
	}
}




// function to check if the dealer has busted by counting the value of all their cards
function checkBustDealer() {
	dealerTotal = 0;
	for (var i = 0; i < dealer.length; i++) {
		if (dealer[i].charAt(0) === '1' || dealer[i].charAt(0) === 'J' || dealer[i].charAt(0) === 'Q' || dealer[i].charAt(0) === 'K') {
			dealerAdd = 10;
			dealerTotal = dealerTotal + dealerAdd;
			console.log("dealerTotal = " + dealerTotal + " JQK loop");
		}
		else if (dealer[i].charAt(0) === 'A') {
			dealerAdd = 11;
			dealerTotal = dealerTotal + dealerAdd;
			console.log("dealerTotal = " + dealerTotal + " A loop");
		}
		else {
			dealerAdd = parseInt(dealer[i].charAt(0));
			dealerTotal = dealerTotal + dealerAdd;
			console.log("dealerTotal = " + dealerTotal + " parse int");
		}
	}
	if (dealerTotal > 21) {
		for (var i = 0; i < dealer.length; i++){
			if (dealer[i].charAt(0) === 'A') {
				dealerSub = 10;
				dealerTotal = dealerTotal - dealerSub;
			}
			else {
				return;
			}
		}
		console.log("dealerTotal after checkbust() = " + dealerTotal)
		document.getElementById("status").innerHTML = "Dealer busted! You win!"
	}
	else {
		return false;
	}


	
}


//possible to hit 11 times maximum, 4 aces, 4 twos, 3 threes (although statistically extremely unlikely)
function hitMe() {
	player.push(shuffledDeck.pop());
	switch (player.length) {
		case 3:
			document.getElementById("playerCard3").innerHTML = player[2];
			checkBustPlayer();
			checkBlackJack();
			break;
		case 4:
			document.getElementById("playerCard4").innerHTML = player[3];
			checkBustPlayer();
			checkBlackJack();
			break;
		case 5:
			document.getElementById("playerCard5").innerHTML = player[4];
			checkBustPlayer();
			checkBlackJack();
			break;
		case 6:
			document.getElementById("playerCard6").innerHTML = player[5];
			checkBustPlayer();
			checkBlackJack();
			break;
		case 7:
			document.getElementById("playerCard7").innerHTML = player[6];
			checkBustPlayer();
			checkBlackJack();
			break;
		case 8:
			document.getElementById("playerCard8").innerHTML = player[6];
			checkBustPlayer();
			checkBlackJack();
			break;
		case 8:
			document.getElementById("playerCard9").innerHTML = player[6];
			checkBustPlayer();
			checkBlackJack();
			break;	
		
	}
}

function stay() {

	playerTotal = 0;
	var i;
	
	//player total loop
	for (var i = 0; i < player.length; i++) {
		if (player[i].charAt(0) === '1' || player[i].charAt(0) === 'J' || player[i].charAt(0) === 'Q' || player[i].charAt(0) === 'K') {
			playerAdd = 10;
			playerTotal = playerTotal + playerAdd;
			console.log("playerAdd = " + playerAdd + " JQK loop");
		}
		else if (player[i].charAt(0) === 'A') {
			playerAdd = 11;
			playerTotal = playerTotal + playerAdd;
			console.log("playerAdd = " + playerAdd + " A loop");
		}
		else {
			playerAdd = parseInt(player[i].charAt(0));
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotal = " + playerTotal + " parse int");
		}
	}
	//letting player know their score
	document.getElementById("status").innerHTML = "You have " + playerTotal;
	console.log("before dealermechanics() playertotal = " + playerTotal)
	dealerMechanics();

}

function dealerMechanics() {
	console.log("beginning of dealermechanics() playerTotal = " + playerTotal)
	var dealerTotal = 0;
	//show the dealer's hidden card
	revealDealer();
	//dealer loop to count total
	for (var i = 0; i < dealer.length; i++) {
		if (dealer[i].charAt(0) === '1' || dealer[i].charAt(0) === 'J' || dealer[i].charAt(0) === 'Q' || dealer[i].charAt(0) === 'K') {
			dealerAdd = 10;
			dealerTotal = dealerTotal + dealerAdd;
			console.log("dealerAdd = " + dealerAdd + " JQK loop");
		}
		else if (dealer[i].charAt(0) === 'A') {
			dealerAdd = 11;
			dealerTotal = dealerTotal + dealerAdd;
			console.log("dealerAdd = " + dealerAdd + " A loop");
		}
		else {
			dealerAdd = parseInt(dealer[i].charAt(0));
			dealerTotal = dealerTotal + dealerAdd;
			console.log("dealerTotal = " + dealerTotal + " parse int");
		}
	}
	console.log("dealerTotal after dealer loop in dealerMechanics() = " + dealerTotal);
	//check if the dealer needs to hit or stand
	//if the dealer need to hit
	if ((dealerTotal) < 17) {
		console.log(dealerTotal + " Dealer < 17")
		dealer.push(shuffledDeck.pop());
		document.getElementById("dealerCard3").innerHTML = dealer[2];
		if (checkBustDealer() == false) {
			stay();
		}
		else {
			return true;
		}
	}
	//if the dealer needs to stand
	else if (dealerTotal > 16 && dealerTotal < 21) {
		if (dealerTotal > playerTotal) {
			document.getElementById("status").innerHTML = "Dealer wins!";
			console.log(dealerTotal + " = dealer total, Dealer between 16-21");
			console.log(playerTotal + " = player total");
		}
		else if (dealerTotal == playerTotal) {
				document.getElementById("status").innerHTML = "Tie! Play again?"
		}	
		else {
			document.getElementById("status").innerHTML = "You win!";
			console.log(dealerTotal + "player total higher than dealer");
		}
	}

}


/*
  Array.range = function(start, stop) {
    return Array.apply(null, { length: 1 + stop - start })
    .map(function(v, i) {return start + i} );
  };

  var suits = 'SCHD'.split('')
  .map(function(e) {
    return Object.defineProperty({}, e, { value: Array.range(1,13) });
  });

  suits.forEach(function(e) {
    console.log(e);
  });

  Array.range(0,51).map(function(e) { var card = e % 13 + 1; var suit = 'SHCD'.split('')[Math.floor(e/13)]; return suit+card; });

*/
