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

function Tile(index) {
	
	this.index = index;

	this.getTile = function() {
		return document.getElementsByClassName(this.index)[0];
	}

	this.setGreen = function() {
		this.getTile().style.backgroundColor = '#2ecc71';
	}

	this.setRed = function() {
		this.getTile().style.backgroundColor = '#e74c3c';
	}

}
