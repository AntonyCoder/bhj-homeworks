// let tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
// let hint = document.querySelector('.tooltip');

// tooltip.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         hint.innerText = `${item.title}`;
//         hint.classList.toggle('tooltip_active');

//         let xPosition = item.getBoundingClientRect().left;
//         let yPosition = item.getBoundingClientRect().top;

//         hint.style.top = `${yPosition + 20}px`;
//         hint.style.left = `${xPosition}px`;
//     });
// })

let tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let hint = document.createElement('div');
hint.classList.add('tooltip');
document.body.append(hint);


tooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        hint.innerText = `${item.title}`;
        hint.classList.toggle('tooltip_active');

        let xPosition = item.getBoundingClientRect().left;
        let yPosition = item.getBoundingClientRect().top;

        hint.style.top = `${yPosition + 20}px`;
        hint.style.left = `${xPosition}px`;
    });
})