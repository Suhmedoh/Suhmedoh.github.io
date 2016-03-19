
function displayRules() {
	alert('Welcome to Josh\'s rendition of Blackjack.\n\n The rules are as follows:\n You must try to get as close to 21 as you can, without going over.\n\n Each card has a numerical value; 2 through 9 represent themselves, 10 through King are valued at 10, and an Ace is counted at 1 or 11, depending on which is more beneficial.\n\n You are dealt 2 cards; For the purpose of this game, both cards will be faceup, as it doesnt matter whether or not the dealer can see your cards, because they have to follow a predefined set of rules. \n\nAfter you recieve your two cards and the dealer has theirs, you may hit or stand.\n\n  If you choose hit, you are dealt another cardwhich adds to your total.\n\n  If at any point you go over 21, you lose. \n If you stand, you stick with the cards you have and whatever they total up to.\n\n  The goal is to beat the dealer.  This can be done by getting 21 exactly blackjack, getting a higher card value total than the dealer .. for example, your 20 vs their 19.. or by not going over 21 and having the dealer bust.')}
// make the array of cards.  Seeing as a casinos typically use 6 or more decks and shuffle the cards partway through, i'll use a theoretically "endless" deck, with an unlimited number of shuffled cards.
// card suits: spades = &#9824; , hearts &#9825; , clubs &#9827 , diamonds &#9826
var deck = ['A&#9824;' , '2&#9824;' , '3&#9824;' , '4&#9824;' , '5&#9824;' , '6&#9824;' , '7&#9824;' , '8&#9824;' , '9&#9824;' , '10&#9824;' , 'J&#9824;' , 'Q&#9824;' , 'K&#9824;' , 'A&#9825;' , '2&#9825;' , '3&#9825;' , '4&#9825;' , '5<span stayle="color:red">&#9825;</span>' , '6&#9825;' , '7&#9825;' , '8&#9825;' , '9&#9825;' , '10&#9825;', 'J&#9825;' , 'Q&#9825;' , 'K&#9825;' , 'A&#9827;' , '2&#9827;' , '3&#9827;' , '4&#9827;' , '5&#9827;' , '6&#9827;' , '7&#9827;' , '8&#9827;' , '9&#9827;' , '10&#9827;' , 'J&#9827;' , 'Q&#9827;' , 'K&#9827;' , 'A&#9826;' , '2&#9826;' , '3&#9826;' , '4&#9826;' , '5&#9826;' , '6&#9826;' , '7&#9826;' , '8&#9826;' , '9&#9826;' , '10&#9826;' , 'J&#9826;' , 'Q&#9826;' , 'K&#9826;' ];
var dealer = [];
var player = [];
var dealerTotal = 0;
var playerTotal = 0;

//from http://jsfromhell.com/array/shuffle
function shuffle(d) {
	for(var j, x, i = d.length; i; j = parseInt(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
    return d;
}

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
		revealDealer();
		document.getElementById("hitStand").innerHTML = "";
	}
	else if (((dealer[0].charAt(0) === 'A') && (dealer[1].charAt(0) === '1' || dealer[1].charAt(0) === 'J' || dealer[1].charAt(0) === 'Q' || dealer[1].charAt(0) === 'K')) ||
	 ((dealer[1].charAt(0) === 'A') && (dealer[0].charAt(0) === '1' || dealer[0].charAt(0) === 'J' || dealer[0].charAt(0) === 'Q' || dealer[0].charAt(0) === 'K'))) {
		document.getElementById("status").innerHTML = "Dealer was dealt Blackjack, you lose."
		revealDealer();
		document.getElementById("hitStand").innerHTML = "";
	}
	else {
		return false;
	}

}

//reveal the dealer's cards as he hits
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
			document.getElementById("dealerCard7").innerHTML = dealer[6];
			break;
		case 8:
			document.getElementById("dealerCard8").innerHTML = dealer[7];
			break;
		case 9:
			document.getElementById("dealerCard9").innerHTML = dealer[8];
			break;
		case 10:
			document.getElementById("dealerCard10").innerHTML = dealer[9];
			break;
		case 11:
			document.getElementById("dealerCard11").innerHTML = dealer[10];
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
			console.log("playerTotal bust = " + playerTotal + " JQK loop");
		}
		else if (player[i].charAt(0) === 'A') {
			playerAdd = 11;
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotal bust = " + playerTotal + " A loop");
		}
		else {
		playerAdd = parseInt(player[i].charAt(0));
		playerTotal = playerTotal + playerAdd;
		console.log("playerTotal bust = " + playerTotal + " parse int");
		}
	}
	if (playerTotal > 21) {
		for (var i = 0; i < player.length; i++){
			if (player[i].charAt(0) === 'A') {
				playerSub = 10;
				playerTotal = playerTotal - playerSub;
			}
		}
		if (playerTotal > 21) {
			document.getElementById("status").innerHTML = "You busted! Better luck next time.";
			revealDealer();
		}
		else if (playerTotal === 21) {
			document.getElementById("status").innerHTML = "You Win!";
			revealDealer();
		} 
		else {
			return false;
		}
	}
	else if (playerTotal == 21) {
		document.getElementById("status").innerHTML = "21! You win!";
		document.getElementById("hitStand").innerHTML = "";
		revealDealer();
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
				console.log("dealer sub ACE routine check")
			}
			else {
				console.log("no ace");
			}
		}
		if (dealerTotal > 21) {
			document.getElementById("status").innerHTML = "Dealer busted! You win!";
			document.getElementById("hitStand").innerHTML = "";
			revealDealer();
		}
		else if (dealerTotal === 21) {
			document.getElementById("status").innerHTML = "Dealer has 21! You lose.";
			document.getElementById("hitStand").innerHTML = "";
			revealDealer();


		} 
		else {
			return false;
		}
	}
	else if (dealerTotal == 21) {
		document.getElementById("status").innerHTML = "Dealer has 21! You lose."
		document.getElementById("hitStand").innerHTML = "";
		revealDealer();
	}
	else {
		return false;
	}
}


//possible to hit 11 times maximum, 4 aces, 4 twos, 3 threes (although statistically extremely unlikely(it's a ~.00000000531 percent chance)
function hitMe() {
	player.push(shuffledDeck.pop());
	switch (player.length) {
		case 3:
			document.getElementById("playerCard3").innerHTML = player[2];
			checkBustPlayer();
			break;
		case 4:
			document.getElementById("playerCard4").innerHTML = player[3];
			checkBustPlayer();
			break;
		case 5:
			document.getElementById("playerCard5").innerHTML = player[4];
			checkBustPlayer();
			break;
		case 6:
			document.getElementById("playerCard6").innerHTML = player[5];
			checkBustPlayer();
			break;
		case 7:
			document.getElementById("playerCard7").innerHTML = player[6];
			checkBustPlayer();
			break;
		case 8:
			document.getElementById("playerCard8").innerHTML = player[7];
			checkBustPlayer();
			break;
		case 9:
			document.getElementById("playerCard9").innerHTML = player[8];
			checkBustPlayer();
			break;	
		case 10:
			document.getElementById("playerCard10").innerHTML = player[9];
			checkBustPlayer();
			break;	
		case 11:
			document.getElementById("playerCard11").innerHTML = player[10];
			checkBustPlayer();
			break;	
		
		
	}
}

//give the dealer another card
function hitDealer() {
	dealer.push(shuffledDeck.pop());
	switch (dealer.length) {
		case 3:
			document.getElementById("dealerCard3").innerHTML = dealer[2];
			checkBustDealer();
			break;	
		case 4:
			document.getElementById("dealerCard4").innerHTML = dealer[3];
			checkBustDealer();
			break;	
		case 5:
			document.getElementById("dealerCard5").innerHTML = dealer[4];
			checkBustDealer();
			break;	
		case 6:
			document.getElementById("dealerCard6").innerHTML = dealer[5];
			checkBustDealer();
			break;	
		case 7:
			document.getElementById("dealerCard7").innerHTML = dealer[6];
			checkBustDealer();
			break;	
		case 8:
			document.getElementById("dealerCard8").innerHTML = dealer[7];
			checkBustDealer();
			break;	
		case 9:
			document.getElementById("dealerCard9").innerHTML = dealer[8];
			checkBustDealer();
			break;	
	}
}

function stand() {
	playerTotal = 0;
	var i;
	//player total loop
	for (var i = 0; i < player.length; i++) {
		if (player[i].charAt(0) === '1' || player[i].charAt(0) === 'J' || player[i].charAt(0) === 'Q' || player[i].charAt(0) === 'K') {
			playerAdd = 10;
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotalStand = " + playerTotal + " JQK loop");
		}
		else if (player[i].charAt(0) === 'A') {
			playerAdd = 11;
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotalStand = " + playerTotal + " A loop");
		}
		else {
			playerAdd = parseInt(player[i].charAt(0));
			playerTotal = playerTotal + playerAdd;
			console.log("playerTotalStand = " + playerTotal + " parse int");
		}
	}
	//checking Aces for 1 vs 11
	if (playerTotal > 21) {
		for (var i = 0; i < player.length; i++){
			if (player[i].charAt(0) === 'A') {
				playerSub = 10;
				playerTotal = playerTotal - playerSub;
			}
		}
		if (playerTotal > 21) {
			document.getElementById("status").innerHTML = "You busted! Better luck next time.";
			document.getElementById("hitStand").innerHTML = "";
			revealDealer();
		}
		else if (playerTotal === 21) {
			document.getElementById("status").innerHTML = "You Win!";
			document.getElementById("hitStand").innerHTML = "";
			revealDealer();
		} 
		else {
			console.log("stand with less than 21");
		}
	}
	else {
		dealerMechanics();
	}

}

function dealerMechanics() {
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
		hitDealer();
		dealerMechanics();
	}
	else if (dealerTotal > 21) {
		checkBustDealer();
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
				document.getElementById("hitStand").innerHTML = "";
		}	
		else {
			document.getElementById("status").innerHTML = "You win!";
			document.getElementById("hitStand").innerHTML = "";
			console.log(dealerTotal + "player total higher than dealer");
		}
	}
	else if (dealerTotal === 21) {
		document.getElementById("status").innerHTML = "Dealer has 21 ! You lose.";
		document.getElementById("hitStand").innerHTML = "";
	}

}

//start the game
shuffle(deck);
var shuffledDeck = shuffle(deck);
initialDeal();
checkBlackJack();
document.getElementById("dealerCard1").innerHTML = dealer[0];
document.getElementById("playerCard1").innerHTML = player[0];
document.getElementById("playerCard2").innerHTML = player[1];
