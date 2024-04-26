const cases = Array.from(document.querySelectorAll('.rotator__case'));


let changeText = setInterval(() => {
    let activeIndex = cases.findIndex(item => item.classList.contains('rotator__case_active'));
    let currentText = cases[activeIndex];

    currentText.classList.remove('rotator__case_active');
    cases[Math.floor(Math.random()*cases.length)].classList.add('rotator__case_active');

    console.log(cases.length);
    console.log(Math.floor(Math.random()*cases.length));
}, 1000)

