const control = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('#book');



control.forEach((e) => {
    e.addEventListener('click', (item) => {
        control.forEach(item => item.classList.remove('font-size_active'));

        e.classList.add('font-size_active');
        item.preventDefault();

        if (e.getAttribute('data-size') === 'small') {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        }
        if (e.getAttribute('data-size') === 'big') {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        }
        if (e.getAttribute('data-size') === null) {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
})

const colorText = Array.from(document.querySelectorAll('.book__control_color .color'));

colorText.forEach((e) => {
    e.addEventListener('click', (item) => {
        colorText.forEach(item => item.classList.remove('color_active'));

        e.classList.add('color_active');
        item.preventDefault();

        if (e.getAttribute('data-text-color') === 'black') {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        }
        if (e.getAttribute('data-text-color') === 'gray') {
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-whitesmoke');
        }
        if (e.getAttribute('data-text-color') === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-black');
        }
        
    })
})

const bgColor = Array.from(document.querySelectorAll('.book__control_background .color'));

bgColor.forEach((e) => {
    e.addEventListener('click', (item) => {
        bgColor.forEach(item => item.classList.remove('color_active'));

        e.classList.add('color_active');
        item.preventDefault();

        if (e.getAttribute('data-bg-color') === 'black') {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');
        }
        if (e.getAttribute('data-bg-color') === 'gray') {
            book.classList.add('book_bg-gray');
            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-white');
        }
        if (e.getAttribute('data-bg-color') === 'white') {
            book.classList.add('book_bg-white');
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-black');
        }
        
    })
})

// const bookElement = document.getElementById("book");
// const controlElements = document.querySelector(".book__controls");

// controlElements.addEventListener("click", function (event) {
//   event.preventDefault();

//   const { size, textColor, bgColor } = event.target.dataset;

//   const elementClassArray = event.target.classList;
//   const activeControl = event.target
//     .closest(".book__control")
//     .querySelectorAll("a");

//   activeControl.forEach((element) => {
//     element.classList.remove(elementClassArray[0] + "_active");
//   });

//   event.target.classList.add(elementClassArray[0] + "_active");

//   function removePreviousClassName(className) {
//     for (value of bookElement.classList) {
//       if (value.includes(className)) {
//         bookElement.classList.remove(value);
//       }
//     }
//   }

//   if (size || event.target.className === "font-size font-size_active") {
//     removePreviousClassName("book_fs-");
//     bookElement.classList.add("book_fs-" + size);
//   }

//   if (textColor) {
//     removePreviousClassName("book_color-");
//     bookElement.classList.add("book_color-" + textColor);
//   }

//   if (bgColor) {
//     removePreviousClassName("book_bg-");
//     bookElement.classList.add("book_bg-" + bgColor);
//   }
// });