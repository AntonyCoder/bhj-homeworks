const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');

cookie.onclick = () => {
    counter.innerText++;
    counter.textContent%2 !== 0 ? cookie.width = 250 : cookie.width = 200;
}

