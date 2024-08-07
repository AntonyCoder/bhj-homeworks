const products = document.querySelector('.products');
const buttons = document.querySelectorAll('.product__add');
const shoppingBasket = document.querySelector('.cart__products');

products.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains("product__quantity-control_dec"))  {
        if (target.nextElementSibling.textContent != 1) {
            target.nextElementSibling.textContent--;
        }
    }

    if (target.classList.contains("product__quantity-control_inc")) {
        target.previousElementSibling.textContent++;
    }
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let product = button.closest('.product');
        let productId = product.dataset.id;
        let productSrc = product.querySelector('img').getAttribute('src');
        let productCounter = product.querySelector('.product__quantity-value').textContent;
        let cartProduct = shoppingBasket.querySelector(`.cart__product[data-id="${productId}"]`);
   

        if (!cartProduct) {
            shoppingBasket.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productSrc}">
        <div class="cart__product-count">${productCounter}</div>
    </div>`)} 
        else {
            let currentCount = shoppingBasket.querySelector('.cart__product-count');
            currentCount.innerText = Number(productCounter) + Number(currentCount.textContent);
         }
    })
});



