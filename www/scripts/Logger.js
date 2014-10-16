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
var timeoutId;

function Logger () {
    log = document.getElementById('log');
}

Logger.prototype.log = function(htmltext) {
	clearTimeout(timeoutId);
    log.innerHTML = htmltext;
    timeoutId = setTimeout(this.clear, 3500);
}

Logger.prototype.clear = function() {
	if (log.style.animationName !== 'fadeout' && log.style.webkitAnimationName !== 'fadeout') {
		log.style.animationName = 'fadeout';
		log.style.webkitAnimationName = 'fadeout';
		log.style.animationDuration = '1.2s';
		log.style.webkitAnimationDuration = '1.2s';

		setTimeout(function() {
			log.style.animationName = '';
			log.style.webkitAnimationName = '';
			log.innerHTML = "";
		}, 1200);
	}
}
