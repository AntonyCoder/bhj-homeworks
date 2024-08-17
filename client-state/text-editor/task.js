'use strict';

const textareaContent = document.getElementById('editor');
const storedText = localStorage.getItem('text');
const clearButton = document.getElementById('btn');


textareaContent.addEventListener('input', () => {
    localStorage.setItem('text', textareaContent.value);
});

textareaContent.value = storedText;

clearButton.addEventListener('click', () => {
    textareaContent.value = '';
    localStorage.removeItem('text');
})





