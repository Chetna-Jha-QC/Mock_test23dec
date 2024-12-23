// Function to load products from localStorage and display them in the cart
function loadCartProducts() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const productGrid = document.getElementById('productGrid');
    const totalPriceElement = document.getElementById('totalPrice');
    
    // Clear any existing products before reloading the cart
    productGrid.innerHTML = '';

    // If there are no products in the cart
    if (cartProducts.length === 0) {
        productGrid.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.textContent = '0';
        return;
    }

    let totalPrice = 0;

    // Loop through the cart products and create product cards
    cartProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Create product image
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');
        
        // Create product title
        const productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.textContent = product.title;

        // Create product price
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${product.price}`;
        
        // Create product description
        const productDescription = document.createElement('p');
        productDescription.classList.add('product-description');
        productDescription.textContent = product.description;

        // Create product rating
        const productRating = document.createElement('p');
        productRating.classList.add('product-rating');
        productRating.textContent = `Rating: ${product.rating}⭐`;

        // Create Remove from Cart button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove from Cart';

        // Add event listener to remove product from cart
        removeButton.addEventListener('click', () => removeFromCart(product));

        // Append elements to the product card
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(productRating);
        productCard.appendChild(removeButton);

        // Append product card to the grid
        productGrid.appendChild(productCard);

        // Update the total price
        totalPrice += parseFloat(product.price);
    });

    // Update the total price displayed
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to remove a product from the cart
function removeFromCart(productToRemove) {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    // Filter out the product to remove
    cartProducts = cartProducts.filter(product => product.title !== productToRemove.title);

    // Save the updated cart back to localStorage
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

    // Reload the cart products to update the display and total price
    loadCartProducts();
}

// Function to handle checkout
function checkout() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    
    if (cartProducts.length === 0) {
        alert("Your cart is empty! Please add some products before checkout.");
        return;
    }

    // Confirmation before proceeding with checkout
    const isConfirmed = confirm("Are you sure you want to checkout?");
    
    if (isConfirmed) {
        // Wait for 2 seconds to simulate processing the checkout
        setTimeout(() => {
            alert("Thanks for shopping!");
            // Clear the cart and reset total price
            localStorage.removeItem('cartProducts');
            loadCartProducts();
        }, 2000);
    }
}

// Event listener for checkout button
document.getElementById('checkoutButton').addEventListener('click', checkout);

// Call loadCartProducts when the page is loaded
window.onload = loadCartProducts;
