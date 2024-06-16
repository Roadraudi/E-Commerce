document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const originalProducts = Array.from(productList.getElementsByClassName("product-box"));

    window.sortProducts = function() {
        const sortOption = document.getElementById("sort").value;
        let products = Array.from(productList.getElementsByClassName("product-box"));

        if (sortOption === "price-asc") {
            products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector(".price").textContent.replace("€", ""));
                const priceB = parseFloat(b.querySelector(".price").textContent.replace("€", ""));
                return priceA - priceB;
         });
        } else if (sortOption === "price-desc") {
            products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector(".price").textContent.replace("€", ""));
                const priceB = parseFloat(b.querySelector(".price").textContent.replace("€", ""));
                return priceB - priceA;
            });
        } else {
            products = originalProducts;
        }

        productList.innerHTML = "";
        products.forEach(product => productList.appendChild(product));
    };
});