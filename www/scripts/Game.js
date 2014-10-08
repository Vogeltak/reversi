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

var playerColor = '#2ecc71';

document.getElementsByClassName('human')[0].addEventListener('click', function() { playerColor = '#2ecc71'; console.log('Set current color to ' +  playerColor); });
document.getElementsByClassName('computer')[0].addEventListener('click', function() { playerColor = '#e74c3c'; console.log('Set current color to ' +  playerColor); });
	
function init() {
	// set display of board to 'inline-block'
	document.getElementById('board').style.display = 'inline-block';

	// set display of settings to 'inline-block'
	document.getElementById('settings').style.display = 'inline-block';

	// set display start to 'none'
	document.getElementsByClassName('button')[0].style.display = 'none';
	
	board = new Board();
}

	/*  Directions
	 *	0 = upperleft
	 *	1 = up
	 *  2 = upperright
	 *  3 = left
	 *  4 = right
	 *  5 = bottomleft
	 *  6 = down
	 *  7 = bottomright
	 */
	function flipTiles(direction) {
		
	}
