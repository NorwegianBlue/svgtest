var pad = document.getElementById("pad");
var log = document.getElementById("log");
var gameIntervalId = -1;

function gameloop() {
}

function startgame() {
	initgame();
	if (gameIntervalId >= 0) {
		clearInterval(gameIntervalId);
	}
    gameIntervalId = setInterval(gameLoop, 16);
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
    log.innerHTML = log.innerHTML +  "touches.length: " + ev.touches.length + ", touches[0].screenX: " + ev.touches[0].screenX + " <br />";
    if (ev.touches.length > 1) {
        if (ev.touches[0].screenX > window.screen.availWidth / 2) {
            pad.setAttribute("x", parseInt(pad.getAttribute("x")) + 10);
        } else if (ev.touches[0].screenX < window.screen.availWidth / 2) {
            pad.setAttribute("x", parseInt(pad.getAttribute("x")) - 10);
        }
    }
}, true);


document.getElementById("btn").onclick = function (evt) {
    document.getElementById("btn").style.backgroundColor = "red";
    //pad.style.backgroundColor("red");
};

log.innerHTML += "availWidth: " + window.screen.availWidth + "<br />";
