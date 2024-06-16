document.addEventListener('DOMContentLoaded', () => {
    const addCartButton = document.querySelector('.add-cart');

    addCartButton.addEventListener('click', () => {
        const title = document.querySelector('h2').innerText;
        const price = document.querySelector('.price').innerText;
        const imageSrc = document.querySelector('.product-img').src;

        // Funktion zum Hinzufügen des Produkts zum Warenkorb in index.html
        addToCart(title, price, imageSrc);
    });

    function addToCart(title, price, imageSrc) {
        // Speichern Sie das Produkt lokal oder senden Sie es über eine API an index.html
        // Beispiel:
        localStorage.setItem('cartItem', JSON.stringify({ title, price, imageSrc }));
        // Navigieren Sie zur Hauptseite (index.html)
        window.location.href = 'index.html';
    }
});
