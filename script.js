document.addEventListener("DOMContentLoaded", function () {
    const cartTable = document.querySelector("#cart tbody");
    const cartSubtotalElement = document.querySelector("#cart-subtotal"); // Update subtotal
    const totalPriceElement = document.querySelector("#cart-total"); // Update total

    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll("#cart tbody tr").forEach(row => {
            const price = parseFloat(row.children[3].textContent.replace("$", ""));
            const quantityInput = row.querySelector("input[type='number']");
            const quantity = parseInt(quantityInput.value);
            const subtotal = price * quantity;
            
            row.children[5].textContent = "$" + subtotal.toFixed(2); // Update row subtotal
            total += subtotal;
        });

        cartSubtotalElement.textContent = "$" + total.toFixed(2); // Update cart subtotal
        totalPriceElement.textContent = "$" + total.toFixed(2); // Update total price
    }

    // Handle quantity change
    cartTable.addEventListener("input", function (event) {
        if (event.target.type === "number") {
            updateCartTotal();
        }
    });

    // Handle product removal
    cartTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("fa-times-circle")) {
            event.target.closest("tr").remove();
            updateCartTotal();
        }
    });

    updateCartTotal(); // Initialize total on page load
    
});
