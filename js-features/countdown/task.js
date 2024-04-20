const timer = document.getElementById('timer');

const finishInterval = () => {
    if(Number(timer.textContent) <= 0) {
        clearInterval();
        alert('Вы победили в конкурсе!');
    } else {
        timer.innerText --;
    }
}

setInterval(finishInterval, 1000);