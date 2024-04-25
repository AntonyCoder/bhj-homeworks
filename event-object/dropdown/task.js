const dropdownValue = document.querySelector(".dropdown__value");
const dropdownItem = Array.from(document.getElementsByClassName("dropdown__item"));
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));


dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle("dropdown__list_active");
});

dropdownLinks.forEach(item => {
    item.addEventListener("click", elem => {
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.toggle("dropdown__list_active");
        elem.preventDefault();
    })
});

