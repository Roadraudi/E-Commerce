// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active');
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active');
};

// Cart Working JS
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Making Function
function ready() {
    // Remove Item From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    // Add to Cart
    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }

    // Buy Button Work
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

// Buy Button
function buyButtonClicked() {
    alert('Your Order has been placed successfully!');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateTotal();
}

// Remove Items from Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.closest('.cart-box').remove();
    updateTotal();
}

// Quantity Changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Add to Cart
function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.closest('.product-box');
    var title = shopItem.querySelector('.product-title').innerText;
    var price = shopItem.querySelector('.price').innerText;
    var imageSrc = shopItem.querySelector('.product-img').src;
    addItemToCart(title, price, imageSrc);
    updateTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-product-title');
    
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText.trim() === title.trim()) {
            alert('This item is already added to the cart');
            return;
        }
    }

    var cartRowContents = `
        <img src="${imageSrc}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bxs-trash-alt cart-remove"></i>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);

    cartRow.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartRow.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
}

function updateTotal() {
    var cartContent = document.querySelector('.cart-content');
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.querySelector('.cart-price');
        var quantityElement = cartBox.querySelector('.cart-quantity');
        var price = parseFloat(priceElement.innerText.replace('€', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.querySelector('.total-price').innerText = total + '€';
}

// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

