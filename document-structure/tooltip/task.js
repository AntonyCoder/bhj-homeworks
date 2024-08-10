'use strict';

let tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let hint = document.createElement('div');
hint.classList.add('tooltip');
document.body.append(hint);


tooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (hint.classList.contains('tooltip_active') && hint.textContent !== item.title){
            hint.classList.remove('tooltip_active');
        }
            hint.textContent = item.title;
            
            let xPosition = item.getBoundingClientRect().left;
            let yPosition = item.getBoundingClientRect().top;
            
            hint.style.top = `${yPosition + 20}px`;
            hint.style.left = `${xPosition}px`;
            
            hint.classList.toggle('tooltip_active');
    });
})