/*
 *
 *	File: Game.js
 *	Description: Main file for setti#ng up and maintaining the game
 *
 *	Authors: Vogeltak, Pacmega, Joep359
 *
 *	09/25/2014
 *
 */

document.getElementsByClassName('button')[0].onclick = init;

var board = [];
	
function init() {
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
	}

	board[27].setGreen();
	board[28].setGreen();
	board[35].setRed();
	board[36].setRed();
}
