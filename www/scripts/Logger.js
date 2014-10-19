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
	// Creates a new p element and adds content to it
	var newLog = document.createElement('p');
	newLog.innerHTML = htmltext;
	// Add new p element to #logs
	var logs = document.getElementById('logs');
	logs.appendChild(newLog);

	if (!isGameEnded())
    	timeoutId = setTimeout(function() { clear(newLog); }, 3500);
}

function clear(element) {
	if (element.style.animationName !== 'fadeout' && element.style.webkitAnimationName !== 'fadeout') {
		element.style.animationName = 'fadeout';
		element.style.webkitAnimationName = 'fadeout';
		element.style.animationDuration = '1.2s';
		element.style.webkitAnimationDuration = '1.2s';

		setTimeout(function() {
			element.style.animationName = '';
			element.style.webkitAnimationName = '';
			element.parentElement.removeChild(element);
		}, 1200);
	}
}
