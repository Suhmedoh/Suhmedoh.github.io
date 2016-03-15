
function displayRules() {
	alert('Welcome to Joshs rendition of Blackjack.\n\n The rules are as follows:\n You must try to get as close to 21 as you can, without going over.\n\n Each card has a numerical value; 2 through 9 represent themselves, 10 through King are valued at 10, and an Ace is counted at 1 or 11, depending on which is more beneficial.\n\n You are dealt 2 cards; For the purpose of this game, both cards will be faceup, as it doesnt matter whether or not the dealer can see your cards, because they have to follow a predefined set of rules. \n\nAfter you recieve your two cards and the dealer has theirs, you may hit or stay.\n\n  If you choose hit, you are dealt another cardwhich adds to your total.\n\n  If at any point you go over 21, you lose. \n If you stay, you stick with the cards you have and whatever they total up to.\n\n  The goal is to beat the dealer.  This can be done by getting 21 exactly blackjack, getting a higher card value total than the dealer .. for example, your 20 vs their 19.. or by not going over 21 and having the dealer bust.')}
// make the array of cards.  Seeing as a casinos typically use 6 or more decks and shuffle the cards partway through, i'll use a theoretically "endless" deck, with an unlimited number of shuffled cards.
// card suits: spades = &#9824; , hearts &#9825; , clubs &#9827 , diamonds &#9826
var cards = ['A&#9824;' , '2&#9824;' , '3&#9824;' , '4&#9824;' , '5&#9824;' , '6&#9824;' , '7&#9824;' , '8&#9824;' , '9&#9824;' , '10&#9824;' , 'J&#9824;' , 'Q&#9824;' , 'K&#9824;' , 'A&#9825;' , '2&#9825;' , '3&#9825;' , '4&#9825;' , '5&#9825;' , '6&#9825;' , '7&#9825;' , '8&#9825;' , '9&#9825;' , '10&#9825;', 'J&#9825;' , 'Q&#9825;' , 'K&#9825;' , 'A&#9827;' , '2&#9827;' , '3&#9827;' , '4&#9827;' , '5&#9827;' , '6&#9827;' , '7&#9827;' , '8&#9827;' , '9&#9827;' , '10&#9827;' , 'J&#9827;' , 'Q&#9827;' , 'K&#9827;' , 'A&#9826;' , '2&#9826;' , '3&#9826;' , '4&#9826;' , '5&#9826;' , '6&#9826;' , '7&#9826;' , '8&#9826;' , '9&#9826;' , '10&#9826;' , 'J&#9826;' , 'Q&#9826;' , 'K&#9826;' ];

function drawCard() {
		return cards[Math.floor(Math.random() * cards.length)];
	}
var dealer = new Object();
dealer.card1 = drawCard();
dealer.card2 = drawCard();
var player = new Object();
player.card1 = drawCard();
player.card2 = drawCard();
document.getElementById("dealerCard1").innerHTML = dealer.card1;
document.getElementById("playerCard1").innerHTML = player.card1;
document.getElementById("playerCard2").innerHTML = player.card2;

function revealDealer() {
	document.getElementById("dealerCard2").innerHTML = dealer.card2;
}

function checkBust() {
//	var testerino = 'SCHD'.split('').map(function(c) { return Object.defineProperty({}, c, {value: ['1..13']}); })
//	document.getElementById("test").innerHTML = testerino[1.value];
}


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




function stay() {
	revealDealer();
	if (checkBust() == false) {
		if (dealer.card1 > player.card1) {
			document.getElementById("winner").innerHTML = "Dealer Wins!";
		}
		else if (player.card1> dealer.card1) {
			document.getElementById("winner").innerHTML = "You Win!";
		}
		else {
			document.getElementById("winner").innerHTML = "Tie! Play again?";
		}	
	}
}

function draw() {
	draw a card for a player/dealer
}

function revealDealer() {
	reveal the mystery card teh dealer has after player finishs hitting/standing
}

function hit() {
	already know card values will be legal, so draw card for player,
	checkBust() after card draw, if <21, give option to hit again or stay

}

function stay() {
	player keeps current cards, reveal dealer card
	dealer has 17, must hit until he's over 17
	figure out soft 17 ruling later
}

function checkBust() {
	do math (card1 value + card 2 value)
	if total > 21, bust
		else ok
	check both hands at start of the game, if both bust dealer wins
	if player busts, dealer wins, if dealer busts, player wins
}

function checkBlackJack() {
	check dealer/user to see if card combo equals 21

}

