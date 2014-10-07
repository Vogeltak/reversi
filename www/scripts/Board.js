/*
 *
 *	File: Board.js
 *	Description: Board class for instantiating Board objects. 
 *		     	 A Board object can handle every change that is made to the state of the board
 *
 *	Authors: Vogeltak, Pacmega, Joep359
 *
 *	10/06/2014
 *
 */

function Board() {

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

	var board = [];

	for (var i = 0; i < 64; i++) {
		board[i] = new Tile(i, 0);
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

	this.getTile = function(index) {
		return board[index];
	}

	this.getTileAbove = function(index) {
		var indexAbove = index - 8;
		if (index > 7)
			return board[indexAbove];
		else
			return;
	}

	this.getTileUnder = function(index) {
		var indexUnder = index + 8
		if (index < 56)
			return board[indexUnder];
		else
			return;
	}

	this.getTileLeft = function(index) {
		var indexLeft = index - 1;
		if (index > 0)
			return board[indexLeft];
		else
			return;
	}

	this.getTileRight = function(index) {
		var indexRight = index + 1;
		if (index < 63)
			return board[indexRight];
		else
			return;
	}

}
