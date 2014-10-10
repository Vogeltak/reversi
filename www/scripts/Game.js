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
window.onload = init;

var board;

/*	
 *  0 = green
 *  1 = red
 */
var playerColor = 0;

document.getElementsByClassName('human')[0].addEventListener('click', function() { playerColor = 0; console.log('Set color to ' +  playerColor); });
document.getElementsByClassName('computer')[0].addEventListener('click', function() { playerColor = 1; console.log('Set color to ' +  playerColor); });
	
function init() {
	// set display of board to 'inline-block'
	document.getElementById('board').style.display = 'inline-block';

	// set display of settings to 'inline-block'
	document.getElementById('settings').style.display = 'inline-block';

	// set display start to 'none'
	document.getElementsByClassName('button')[0].style.display = 'none';
	
	board = new Board();
}

function flipTiles(index) {
	if (playerColor == 0) {
		for (var i = 0; i < 8; i++) {
			var tile = board.getSurroundingTile(index, i);
			if (board.isValidDirection(index, i)) {
				if (tile.getState() == 2) {
					while (tile.getState() == 2) {
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
