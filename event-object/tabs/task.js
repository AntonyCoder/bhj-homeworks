const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));



tabs.forEach((e, index) => {
    e.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('tab_active')
        });
        
        tabsContent.forEach(item => {
            item.classList.remove('tab__content_active');
        });
        e.classList.add('tab_active');
        tabsContent[index].classList.add('tab__content_active');
    });
});

