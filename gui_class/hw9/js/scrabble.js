/*
Joshua Semedo
GUI 1, Umass Lowell
12/6/16
This is for homework 9, the scrabble project.
*/


/*create a set of tiles to act as the data structure, and another set used for scoring*/
var tiles = [];

function setTiles(){
	tiles[0] = { "letter" : "A", "value" : 1, "tilesLeft" : 9 };
	tiles[1] = { "letter" : "B", "value" : 3, "tilesLeft" : 2 };
	tiles[2] = { "letter" : "C", "value" : 3, "tilesLeft" : 2 };
	tiles[3] = { "letter" : "D", "value" : 2, "tilesLeft" : 4 };
	tiles[4] = { "letter" : "E", "value" : 1, "tilesLeft" : 12 };
	tiles[5] = { "letter" : "F", "value" : 4, "tilesLeft" : 2 };
	tiles[6] = { "letter" : "G", "value" : 2, "tilesLeft" : 3 };
	tiles[7] = { "letter" : "H", "value" : 4, "tilesLeft" : 2 };
	tiles[8] = { "letter" : "I", "value" : 1, "tilesLeft" : 9 };
	tiles[9] = { "letter" : "J", "value" : 8, "tilesLeft" : 1 };
	tiles[10] = { "letter" : "K", "value" : 5, "tilesLeft" : 1 };
	tiles[11] = { "letter" : "L", "value" : 1, "tilesLeft" : 4 };
	tiles[12] = { "letter" : "M", "value" : 3, "tilesLeft" : 2 };
	tiles[13] = { "letter" : "N", "value" : 1, "tilesLeft" : 6 };
	tiles[14] = { "letter" : "O", "value" : 1, "tilesLeft" : 8 };
	tiles[15] = { "letter" : "P", "value" : 3, "tilesLeft" : 2 };
	tiles[16] = { "letter" : "Q", "value" : 10, "tilesLeft" : 1 };
	tiles[17] = { "letter" : "R", "value" : 1, "tilesLeft" : 6 };
	tiles[18] = { "letter" : "S", "value" : 1, "tilesLeft" : 4 };
	tiles[19] = { "letter" : "T", "value" : 1, "tilesLeft" : 6 };
	tiles[20] = { "letter" : "U", "value" : 1, "tilesLeft" : 4 };
	tiles[21] = { "letter" : "V", "value" : 4, "tilesLeft" : 2 };
	tiles[22] = { "letter" : "W", "value" : 4, "tilesLeft" : 2 };
	tiles[23] = { "letter" : "X", "value" : 8, "tilesLeft" : 1 };
	tiles[24] = { "letter" : "Y", "value" : 4, "tilesLeft" : 2 };
	tiles[25] = { "letter" : "Z", "value" : 10, "tilesLeft" : 1 };
	tiles[26] = { "letter" : "_", "value" : 0, "tilesLeft" : 2 };
}
var scoreValue = [];
scoreValue["A"] = {  "value" : 1 };
scoreValue["B"] = {  "value" : 3 };
scoreValue["C"] = {  "value" : 3 };
scoreValue["D"] = {  "value" : 2 };
scoreValue["E"] = {  "value" : 1 };
scoreValue["F"] = {  "value" : 4 };
scoreValue["G"] = {  "value" : 2 };
scoreValue["H"] = {  "value" : 4 };
scoreValue["I"] = {  "value" : 1 };
scoreValue["J"] = {  "value" : 8 };
scoreValue["K"] = {  "value" : 5 };
scoreValue["L"] = {  "value" : 1 };
scoreValue["M"] = {  "value" : 3 };
scoreValue["N"] = {  "value" : 1 };
scoreValue["O"] = {  "value" : 1 };
scoreValue["P"] = {  "value" : 3 };
scoreValue["Q"] = {  "value" : 10 };
scoreValue["R"] = {  "value" : 1 };
scoreValue["S"] = {  "value" : 1 };
scoreValue["T"] = {  "value" : 1 };
scoreValue["U"] = {  "value" : 1 };
scoreValue["V"] = {  "value" : 4 };
scoreValue["W"] = {  "value" : 4 };
scoreValue["X"] = {  "value" : 8 };
scoreValue["Y"] = {  "value" : 4 };
scoreValue["Z"] = {  "value" : 10 };
scoreValue["_"] = {  "value" : 0 };

/*declare needed constants */
var tileNum = 7;
var uniqueTiles = 27;
var letterImg = "";
var totalTiles = "";
var usedLetters = 0;
var scoreTotal = 0;
var count = 0;
var playedTiles = [];
var pti = 0;
var usedTile;
var arrayLengthReal
setTiles();

/*from developer.mozilla.org */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/* to completely reset the gamestate */
function resetGame() {
	document.getElementById("score").innerHTML = "Current Score is: 0";
	document.getElementById("error").innerHTML = "";
	document.getElementById("rack").innerHTML = "";
	setTiles();
	tileNum = 7;
	letterImg = "";
	totalTiles = "";
	uniqueTiles = 26;
	usedLetters = 0;
	scoreTotal = 0;
	var count = 0;
	var playedTiles = [];
	var pti = 0;
	var usedTile;
	var arrayLengthReal
	getRandomTileImg();
	return false;
}

/* clear the tiles from the board */
function clearBoard() {
	arrayLengthReal = playedTiles.length;
	for (i = 0; i <= arrayLengthReal - 1; i++) {
		console.log("arraylengthReal in loop = " + arrayLengthReal);
		usedTile = document.getElementById(playedTiles[i]);
		if (usedTile == null){
			console.log("user moved the same tile to two different squares before submitting");
			arrayLengthReal = arrayLengthReal - 1;
		}
		else {
			usedTile.parentNode.removeChild(usedTile);
		}
	}
	console.log("arraylengthReal= " + arrayLengthReal);

	$('.droppableBlank').droppable('enable');
	$('.droppableDw').droppable('enable');
	for (i = 0; i < arrayLengthReal; i++) {
		x = getRandomInt(0, uniqueTiles);
		tiles[x].tilesLeft -= 1;
		letterImg = '<img src="./imgs/' + tiles[x].letter + '.jpg" class="letter draggable ui-draggable ui-draggable-handle" id="' + tiles[x].letter + '">';
		totalTiles = totalTiles + letterImg;
		if (tiles[x].tilesLeft <= 0){
			tiles.splice(x,1);
			uniqueTiles -= 1;
		}

	}
	var previousTiles = document.getElementById("rack").innerHTML;
	newTiles = previousTiles + totalTiles;
	document.getElementById("rack").innerHTML = newTiles;
	totalTiles = "";
	init();
	for (j = 0; j <= tiles.length - 1; j++) {
		count = tiles[j].tilesLeft + count;
	}
	if (count < 7) {
		tileNum = 2;
	}
	console.log(count);
	count = 0;

	playedTiles = [];
	pti = 0;
	return false;
}

/* to get random tiles from the remaining set */
function getRandomTileImg() {
	$('.droppableBlank').droppable('enable');
	$('.droppableDw').droppable('enable');
	for (i = 0; i < tileNum; i++) {
		x = getRandomInt(0, uniqueTiles);
		tiles[x].tilesLeft -= 1;
		letterImg = '<img src="./imgs/' + tiles[x].letter + '.jpg" class="letter draggable ui-draggable ui-draggable-handle" id="' + tiles[x].letter + '">';
		totalTiles = totalTiles + letterImg;
		if (tiles[x].tilesLeft <= 0){
			tiles.splice(x,1);
			uniqueTiles -= 1;
		}

	}
	document.getElementById("rack").innerHTML = totalTiles;
	totalTiles = "";
	init();
	for (j = 0; j <= tiles.length - 1; j++) {
		count = tiles[j].tilesLeft + count;
	}
	if (count < 7) {
		tileNum = 2;
	}
	console.log(count);
	count = 0;
	return false;
}

/* check the score */
function checkScore() {
	$('.droppableBlank').droppable('disable');
	$('.droppableDw').droppable('disable');
	document.getElementById("score").innerHTML = "<p>Score: " + scoreTotal + "</p>";
	$('.droppableBlank').droppable({
		drop: function(event, ui) {
        var id = ui.draggable.attr("id");
        scoreTotal = scoreTotal + scoreValue[id].value;
    }
	});
	$('.droppableDw').droppable({
		drop: function(event, ui) {
        var id = ui.draggable.attr("id");
        console.log("id before playedTiles" + id);
        scoreTotal = scoreTotal + scoreValue[id].value*2;
    }
	});
	clearBoard();
	return false;
}

/* initialize the droppables and draggables, print debug info to console */
function init() {
	$('.droppableBlank').droppable({
		drop: function(event, ui) {
        var id = ui.draggable.attr("id");
        scoreTotal = scoreTotal + scoreValue[id].value;
        console.log("id before playedTiles" + id);
        playedTiles[pti] = id;
        console.log("playedTiles i counter=" + pti + ". playedTiles[pti] = " + playedTiles[pti]);
        pti++;
        console.log("scoreValue= " + scoreValue);
        console.log("scoreTotal= " + scoreTotal);
    }
	});
	$('.droppableDw').droppable({
		drop: function(event, ui) {
        var id = ui.draggable.attr("id");
        scoreTotal = scoreTotal + scoreValue[id].value*2;
        console.log("id before playedTiles" + id);
        playedTiles[pti] = id;
        console.log("playedTiles i counter=" + pti + ". playedTiles[pti] = " + playedTiles[pti]);
        pti++;
        console.log("scoreValue= " + scoreValue);
        console.log("scoreTotal= " + scoreTotal);
    }
	});
  	$('.draggable').draggable({ opacity : .40, snap : ".droppableBlank,.droppableDw", snapMode : "inner" });
} ;
$( init );

$(document).ready(function(){
	getRandomTileImg();
});