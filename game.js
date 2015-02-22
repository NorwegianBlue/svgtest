var pad = document.getElementById("pad");
var gameIntervalId = -1;

function gameloop() {
}

function startgame() {
	initgame();
	if (gameInvervalId >= 0) {
		clearInterval(gameIntervalId);
	}
    gameIntervalID = setInterval(gameLoop, 16);
}

window.addEventListener('keydown', function (evt) {
    switch (evt.keyCode) {
        // Left arrow
        case 37:	
			pad.setAttribute("x", parseInt(pad.getAttribute("x")) - 10);
            break;
        // Right arrow   
        case 39:
			pad.setAttribute("x", parseInt(pad.getAttribute("x")) + 10);
            break;
    }
}, true);


window.addEventListener('touchstart', function (ev) {
	if (ev.touches.length > 1) {
		if (ev.touches[0].screenX > window.screen.availWidth/2) {
			pad.setAttribute("x", parseInt(pad.getAttribute("x")) + 10);
		} else if (ev.touches[0].screenX < window.screen.availWidth/2) {
			pad.setAttribute("x", parseInt(pad.getAttribute("x")) - 10);
		}
	}
}, true);


document.getElementById("btn").onclick = function (evt) {
	pad.setAttribute("color", "red");
};
