/*
 *
 *	File: Game.js
 *	Description: Main file for setting up and maintaining the game
 *
 *	Authors: Vogeltak, Pacmega, Joep359
 *
 *	09/25/2014
 *
 */

document.getElementsByClassName('button')[0].onclick = init;
document.getElementsByClassName('reset')[0].onclick = function() { window.location.reload(false); init(); };
window.onload = init;

var board;
var logger;

/*	
 *  0 = green
 *  1 = red
 */
var playerColor = 0;
	
function init() {
	// set display of board to 'inline-block'
	document.getElementById('board').style.display = 'inline-block';

	// set display of settings to 'inline-block'
	document.getElementById('settings').style.display = 'inline-block';

	// set display start to 'none'
	document.getElementsByClassName('button')[0].style.display = 'none';

	// Hide the red player icon under 'Current Player', because current player is green
	document.getElementsByClassName('computer')[0].style.display = 'none';
	
	board = new Board();
	logger = new Logger();

	// display welcome message
	logger.log('<span class="green">Welcome</span> to a new reversi game!');

}

function togglePlayers() {
	var green = document.getElementsByClassName('human')[0];
	var red = document.getElementsByClassName('computer')[0];
	// switch to other player
	if (playerColor == 0) {
		playerColor = 1;
		console.log('Switched player to 1');
		// display current player and hide the other one
		green.style.display = 'none';
		red.style.display = 'block';
	}
	else if (playerColor == 1) {
		playerColor = 0;
		console.log('Switched player to 0');
		// display current player and hide the other one
		red.style.display = 'none';
		green.style.display = 'block';
	}
}

function flipTiles(index) {
	if (playerColor == 0) {
		for (var i = 0; i < 8; i++) {
			var tile = board.getSurroundingTile(index, i);
			if (board.isValidDirection(index, i)) {
				if (tile.getState() == 2) {
					while (tile.getState() == 2) {
						var tileClass = tile.getTile();
						// Flips tile
						if (tileClass.style.animationName !== 'flip' && tileClass.style.webkitAnimationName !== 'flip') {
							tileClass.style.animationName = 'flip';
							tileClass.style.webkitAnimationName = 'flip';
							tileClass.style.animationDuration = '0.4s';
							tileClass.style.webkitAnimationDuration = '0.4s';

							setTimeout(function() {
								tileClass.style.animationName = '';
								tileClass.style.webkitAnimationName = '';
							}, 400);
						}

						tile.setGreen();
						console.log("Flipped " + tile.getIndex() + " to " + playerColor);
						tile = board.getSurroundingTile(tile.getIndex(), i);
						if (tile.getState() == 1)
							break;
					}
				}
			}
		}
	}
	if (playerColor == 1) {
		for (var i = 0; i < 8; i++) {
			var tile = board.getSurroundingTile(index, i);
			if (board.isValidDirection(index, i)) {
				if (tile.getState() == 1) {
					while (tile.getState() == 1) {
						var tileClass = tile.getTile();
						// Flips tile
						if (tileClass.style.animationName !== 'flip' && tileClass.style.webkitAnimationName !== 'flip') {
							tileClass.style.animationName = 'flip';
							tileClass.style.webkitAnimationName = 'flip';
							tileClass.style.animationDuration = '0.4s';
							tileClass.style.webkitAnimationDuration = '0.4s';

							setTimeout(function() {
								tileClass.style.animationName = '';
								tileClass.style.webkitAnimationName = '';
							}, 400);
						}
						tile.setRed();
						console.log("Flipped " + tile.getIndex() + " to " + playerColor);
						tile = board.getSurroundingTile(tile.getIndex(), i);
						if (tile.getState() == 2)
							break;
					}
				}
			}
		}
	}
}

// TODO: check if game is ended without all tiles being placed
function isGameEnded() {
	if (board.tilesPlaced == 64)
		return true;
	else {
		if (!hasPossibleMove(0) && !hasPossibleMove(1))
			return true;
		else
			return false;
	}
}

function hasPossibleMove(player) {
	var hasPossibleMove = false;
	for (var i = 0; i < 64; i++) {
		if (board.getTile(i).getState() == 0) {
			if (board.isValidMove(i, player)) {
				hasPossibleMove = true;
				break;
			}
		}
	}
	return hasPossibleMove;
}

function finalStuff() {
	// Remove eventListeners
	for (var i = 0; i < 64; i++)
		board.getTile(i).getTile().removeEventListener('click', board.getTile(i), false);
	
	var score0 = getScore(1);
	var score1 = getScore(2);
	console.log('0 has a score of ' + score0);
	console.log('1 has a score of ' + score1);
	logger.log('Score <span class="green">Green</span> : ' + score0 + ' <br> Score <span class="red">Red</span> : ' + score1);

	if (score0 > score1) {
		console.log('0 has won the game!');
		logger.log('<br><span class="green">Green</span> has <strong>won</strong>! <br> Congratulations!');
	}
	else if (score1 > score0) {
		console.log('1 has won the game!');
		logger.log('<br><span class="red">Red</span> has <strong>won</strong>! <br> Congratulations!');
	}
}

function getScore(player) {
	var score = 0;
	for (var i = 0; i < 64; i++)
		if (board.getTile(i).getState() == player)
			score++;
	return score;
}

// TEMP
function setFinalState() {
	for (var i = 0; i < 32; i++)
		board.getTile(i).setGreen();
	for (var j = 32; j < 63; j++)
		board.getTile(j).setRed();
	board.tilesPlaced = 63;
}

// TEMP
function setImpossibleState() {
	for (var i = 0; i < 64; i++) {
		if (i == 1 || i == 50)
			board.getTile(i).setGreen();
		else if (i == 56 || i == 58)
			board.getTile(i).setNeutral();
		else
			board.getTile(i).setRed();
	}
	board.tilesPlaced = 62;
	playerColor = 1;
}
