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

// initialize empty board array
var board = [];

for (var i = 0; i < 64; i++) {
	board[i] = new Tile(i);
}
