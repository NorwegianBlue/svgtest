var pad = document.getElementById("pad");
var log = document.getElementById("log");
var gameIntervalId = -1;


/*
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
*/

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
    ev.preventDefault();
    var touches = ev.changedTouches;

    log.innerHTML = log.innerHTML +  "touches.length: " + ev.touches.length + ", touches[0].clientX: " + ev.touches[0].clientX + " offsetWidth: " + ev.touches[0].target.offsetWidth + "<br />";

    if (ev.touches.length > 1) {
        var w = ev.touches[0].target.offsetWidth;
        if (ev.touches[0].clientX > ev.touches[0]. w / 2) {
            pad.setAttribute("x", parseInt(pad.getAttribute("x")) + 10);
        } else if (ev.touches[0].clientX < w / 2) {
            pad.setAttribute("x", parseInt(pad.getAttribute("x")) - 10);
        }
    }
}, true);


document.getElementById("btn").onclick = function (evt) {
    document.getElementById("btn").style.backgroundColor = "red";
    //pad.style.backgroundColor("red");
};

log.innerHTML += "availWidth: " + window.screen.availWidth + "<br />";
