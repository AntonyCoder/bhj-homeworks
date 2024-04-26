const block = document.querySelectorAll('.reveal');


document.addEventListener('scroll', () => {
    block.forEach(e => {
        const viewportHeight = window.innerHeight;
        const elementTop = e.getBoundingClientRect().top;
        const elementBottom = e.getBoundingClientRect().bottom;

        if (elementTop > 0 || elementBottom < viewportHeight) {
            e.classList.add('reveal_active');
        }
        if (elementTop < 0 || elementBottom > viewportHeight) {
            e.classList.remove('reveal_active');
        }
    })
})