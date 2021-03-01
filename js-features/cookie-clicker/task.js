'use strict'
const clickerElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');
cookieElement.onclick = function () {
    clickerElement.textContent++;
    if (clickerElement.textContent % 2 === 1) {
        cookieElement.width = 250;
    } else {
        cookieElement.width = 200;
    }
}
