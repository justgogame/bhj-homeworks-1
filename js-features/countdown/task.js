'use strict'
const timerFunc = function () {
    const elementTimer = document.getElementById('timer');
    if (elementTimer.textContent > 0) {
        elementTimer.textContent -= 1;
    } else {
        clearInterval(timerFunc);
        alert('Вы победили в конкурсе');
    }
}

setInterval(timerFunc, 1000);
