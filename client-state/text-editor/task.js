'use strict';

const textareaContent = document.getElementById('editor');
const storedText = localStorage.getItem('text');
const clearButton = document.getElementById('btn');

setInterval(() => {
    localStorage.setItem('text', textareaContent.value);
}, 1)

textareaContent.value = storedText;

clearButton.addEventListener('click', () => {
    textareaContent.value = '';
    localStorage.removeItem('text');
})





