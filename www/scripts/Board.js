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

	/*
	 *	overloaded getTile method to retrieve surrounding tiles
	 */

	 /*  Directions
	  *  0 = upperleft	
	  *  1 = above
	  *  2 = upperright
	  *  3 = left
	  *  4 = right
	  *  5 = bottomleft
	  *  6 = down
	  *  7 = bottomright
	  */

	this.getTile = function(index, direction) {
		if (direction == 0) {
			var indexRight = index - 9;
			if (index > 8 && index != 8 && index != 16 && index != 24 && index != 32 && index != 40 && index != 48 && index != 56)
				return board[indexRight];
			else
				return;
		}
		if (direction == 1) {
			var indexAbove = index - 8;
			if (index > 7)
				return board[indexAbove];
			else
				return;
		}

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

	this.getTileUpperLeft = function(index) {
		
	}

	this.getTileUpperRight = function(index) {
		var indexRight = index - 7;
		if (index > 7 && index != 7 && index != 15 && index != 23 && index != 31 && index != 39 && index != 47 && index != 55)
			return board[indexRight];
		else
			return;
	}

	this.getTileBottomLeft = function(index) {
		var indexRight = index + 7;
		if (index < 56 && index != 0 && index != 8 && index != 16 && index != 24 && index != 32 && index != 40 && index != 48)
			return board[indexRight];
		else
			return;
	}

	this.getTileBottomRight = function(index) {
		var indexRight = index + 9;
		if (index < 55 && index != 7 && index != 15 && index != 23 && index != 31 && index != 39 && index != 47)
			return board[indexRight];
		else
			return;
	}

	/*  Color
	 *  0 = green (human player)
	 *  1 = red   (computer player)
	 */
	this.isValidMove = function(index, color) {
		if (color == 0) {
			while (board[index].getTileUpperLeft().getState() == 2) {

			}
		}
		else {

		}
	}

}
