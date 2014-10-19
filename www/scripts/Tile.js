/*
 *
 *	File: Tile.js
 *	Description: Tile class for instantiating Tile objects
 *
 *	Authors: Vogeltak, Pacmega, Joep359
 *
 *	09/25/2014
 *
 */

/* Tile colors
 * neutral : #ddd
 * green : #2ecc71
 * green-hover : #27ae60
 * red : #e74c3c
 * red-hover : #c0392b
 */

function Tile(index, state) {
	
	this.index = index;

	/*
	 *	Tile states
	 *	0 : neutral
	 *	1 : green (human player)
	 *	2 : red (computer player)
	 */
	this.state = state;

	this.getTile = function() {
		return document.getElementsByClassName(this.index)[0];
	}

	this.setNeutral = function() {
		var tile = this.getTile();
		setTimeout(function() {
			tile.style.backgroundColor = '#ddd';
		}, 200);
		this.state = 0;
	}

	this.setGreen = function() {
		var tile = this.getTile();
		setTimeout(function() {
			tile.style.backgroundColor = '#2ecc71';
		}, 200);
		this.state = 1;
	}

	this.setRed = function() {
		var tile = this.getTile();
		setTimeout(function() {
			tile.style.backgroundColor = '#e74c3c';
		}, 200);
		this.state = 2;
	}

	this.handleEvent = function() {
		if (board.isValidMove(this.index, playerColor)) {
			if (playerColor == 0) {
				this.setGreen();
				console.log('Placed 0 at ' + this.getIndex());
				logger.log('Succesfully placed a <span class="green">green</span> tile on ' + this.getIndex());
			}
			else if (playerColor == 1) {
				this.setRed();
				console.log('Placed 1 at ' + this.getIndex());
				logger.log('Succesfully placed a <span class="red">red</span> tile on ' + this.getIndex());
			}
			board.tilesPlaced++;
			console.log(board.tilesPlaced + ' tiles are currently placed on the board.');
			flipTiles(this.index);
			togglePlayers();

			if (isGameEnded()) {
				console.log('Game has ended!');
				logger.log('Game has ended!');
				finalStuff();
			}
		}
		else {
			console.log('Unable to place tile on ' + this.getIndex() + '! Invalid move!');
			if (playerColor == 0)
				logger.log('Unable to place a <span class="green">green</span> tile on ' + this.getIndex() + '! Invalid move!');
			else if (playerColor == 1)
				logger.log('Unable to place a <span class="red">red</span> tile on ' + this.getIndex() + '! Invalid move!');
		}
	}

	this.getState = function() {
		return this.state;
	}

	this.getIndex = function() {
		return this.index;
	}

}
