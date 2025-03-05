
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}


function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function addToCart(productId, productName, productPrice, productImage) {
    let cart = getCart();

    
    if (!productId) {
        console.error("Product ID is missing!");
        return;
    }

    
    let existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        
        existingItem.quantity += 1;
    } else {
       
        cart.push({
            id: productId,
            name: productName,
            price: parseFloat(productPrice), 
            image: productImage,
            quantity: 1
        });
    }

   
    saveCart(cart);
    alert(`${productName} added to cart!`);
}


document.querySelectorAll(".cart").forEach(button => {
    button.addEventListener("click", function () {
        let product = this.closest(".pro");

      
        let productId = product.getAttribute("data-id"); 
        let productName = product.querySelector("h5").innerText;
        let productPrice = product.querySelector("h4").innerText.replace("$", "").trim();
        let productImage = product.querySelector("img").src;

        addToCart(productId, productName, productPrice, productImage);
    });
});
