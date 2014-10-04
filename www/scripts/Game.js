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
document.getElementsByClassName('reset')[0].onclick = init;

var board = [];

var playerColor = '#2ecc71';

document.getElementsByClassName('human')[0].addEventListener('click', function() { playerColor = '#2ecc71'; });
document.getElementsByClassName('computer')[0].addEventListener('click', function() { playerColor = '#e74c3c'; });
	
function init() {
	// set visibility of board to 'visible'
	document.getElementById('board').style.visibility = 'visible';

	// set visibility of settings to 'visible'
	document.getElementsByClassName('settings')[0].style.visibility = 'visible';

	// set visibility start to 'hidden'
	document.getElementsByClassName('button')[0].style.display = 'none';

	// initialize empty board array
	/*
	 *	BOARD LAYOUT
	 *	0  1  2  3  4  5  6  7
	 *	8  9  10 11 12 13 14 15
	 *	16 17 18 19 20 21 22 23
	 *	24 25 26 27 28 29 30 31
	 *	32 33 34 35 36 37 38 39
	 *	40 41 42 43 44 45 46 47
	 *	48 49 50 51 52 53 54 55
	 *	56 57 58 59 60 61 62 63
	 */

	for (var i = 0; i < 64; i++) {
		board[i] = new Tile(i);
		// set each tile color to neutral
		board[i].setNeutral();
	}

	// set default state
	board[27].setRed();
	board[28].setRed();
	board[35].setGreen();
	board[36].setGreen();

	// set event listener for every tile
	for (var j = 0; j < 64; j++) {
		board[j].getTile().addEventListener('click', board[j], false);
	}
}
