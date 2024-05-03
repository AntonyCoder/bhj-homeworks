const block = document.querySelectorAll('.reveal');


document.addEventListener('scroll', () => {
    block.forEach(e => {
        const viewportHeight = window.innerHeight;
        const elementTop = e.getBoundingClientRect().top;

        if (elementTop > 0 && elementTop < viewportHeight) {
            e.classList.add('reveal_active');
        } else {
            e.classList.remove('reveal_active');
        }
    })
})
