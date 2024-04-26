function moveToBottom(button) {
    let product = button.parentNode;
    product.style.display = 'none';
    document.getElementById('bottomSection').appendChild(product);
    product.style.display = 'block';
}

function moveToTop() {
    let bottomSection = document.getElementById('bottomSection');
    let products = bottomSection.getElementsByClassName('product');
    while (products.length > 0) {
        let product = products[0];
        product.style.display = 'none';
        document.body.insertBefore(product, bottomSection);
        product.style.display = 'block';
    }
}