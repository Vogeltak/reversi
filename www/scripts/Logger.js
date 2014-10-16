/*
 *
 *	File: Logger.js
 *	Description: Logger class for instantiating Logger objects, used to log information to the player.
 *
 *	Authors: Vogeltak, Pacmega, Joep359
 *
 *	09/25/2014
 *
 */

var log;

function Logger () {
    log = document.getElementById('log');
}

Logger.prototype.log = function(htmltext) {
    log.innerHTML = htmltext;
}

Logger.prototype.clear = function() {
	log.innerHTML = "";
}