window.onload = init;

function init() {

	var parentForBoard = document.getElementById('board');
	var firstChild = document.getElementById('firstChild');

	for (var i = 63; i >= 0; i--) {
		var box = document.createElement('div');
		box.className += 'box ';
		box.className += i;
		parentForBoard.insertBefore(box, firstChild.nextSibling);
	}

}