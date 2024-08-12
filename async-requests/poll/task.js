const xhr = new XMLHttpRequest();
const poll = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');


xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let request = JSON.parse(xhr.responseText);
        poll.textContent = request.data.title;
        let answers = request.data.answers;
        Object.keys(answers).forEach((e) => {
            pollAnswers.innerHTML += `<button class="poll__answer">${request.data.answers[e]}</button>`
        });
        const btn = document.querySelectorAll('.poll__answer');
        btn.forEach(item => {
            item.onclick = () => {
                alert('Спасибо, ваш голос засчитан!');
                window.location.reload();
            }
        })
    }
});


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
