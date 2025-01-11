/*
*
*   nyexoi's Market - Script
*
*   Made By https://github.com/nyex0i
*
*/

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

const products = {
    1: { 
        name: "Rahim feet pics", 
        price: 19.99, 
        description: "100% real",
        buyUrl: "https://github.com/nyex0i"
    },
    2: { 
        name: "Slave 🔥", 
        price: 420.69, 
        description: "who doesnt like slaves?",
        buyUrl: "https://github.com/nyex0i"
    },
};

let currentProductId = null;

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    currentProductId = urlParams.get('id');

    const product = products[currentProductId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Product not found</p>';
    }
}

function purchaseProduct() {
    const product = products[currentProductId];
    if (product && product.buyUrl) {
        window.location.href = product.buyUrl;
    } else {
        alert('Unable to process purchase. Please try again later.');
    }
}