'use strict';

const formSingin = document.getElementById('signin__form');
const formWrapper = document.getElementById('signin')
const formBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const loguot = document.getElementById('logout');

if (localStorage.id) {
    userId.textContent = localStorage.id;

    formWrapper.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    loguot.classList.add('logout_active');
}


formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(formSingin);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.onload = () => {

        if (xhr.response.success === true) {
            let userIdAuth = xhr.response.user_id;
            localStorage.setItem('id', userIdAuth);
            userId.textContent = userIdAuth;

            formWrapper.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            loguot.classList.add('logout_active');
        } else {
            alert('Неверный логин/пароль!');
        }
    }

    formSingin.reset();

});

loguot.addEventListener('click', () => {
    localStorage.clear();
    formWrapper.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    loguot.classList.remove('logout_active');
});