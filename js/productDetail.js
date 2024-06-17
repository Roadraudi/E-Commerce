document.addEventListener('DOMContentLoaded', () => {
    const addCartButton = document.querySelector('.add-cart');

    addCartButton.addEventListener('click', () => {
        const title = document.querySelector('h2').innerText;
        const price = document.querySelector('.price').innerText;
        const imageSrc = document.querySelector('.product-img').src;

        // Call the function to add the product to the cart
        addToCart(title, price, imageSrc);
    });

    // Define the function to add the product to the cart
    function addToCart(title, price, imageSrc) {
        localStorage.setItem('cartItem', JSON.stringify({ title, price, imageSrc }));
        window.location.href = 'index.html';
    }
});
