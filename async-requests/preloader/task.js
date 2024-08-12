const valuteList = document.getElementById('items');
const preloader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        preloader.classList.remove('loader_active');
        let answer = JSON.parse(xhr.responseText);
        Object.keys(answer.response.Valute).forEach((key) => {
        valuteList.innerHTML += `<div class="item"><div class="item__code">${answer.response.Valute[key].CharCode}</div>
        <div class="item__value">${answer.response.Valute[key].Value}</div>
        <div class="item__currency">руб.</div></div>`
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
