const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');

if(!document.cookie) {
    modal.classList.add('modal_active');
} 

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal status', 'close');
});

function setCookie (name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}


