// Function to load and display wishlisted products from localStorage
function loadWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlistedProducts')) || [];
    const productGrid = document.getElementById('productGrid');

    // If there are no products in the wishlist
    if (wishlist.length === 0) {
        productGrid.innerHTML = '<p>No products in your wishlist yet.</p>';
        return;
    }

    // Loop through the wishlisted products and create cards
    wishlist.forEach(product => {
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

        // Create product rating
        const productRating = document.createElement('p');
        productRating.classList.add('product-rating');
        productRating.textContent = `Rating: ${product.rating}⭐`;

        // Create Add to Cart button
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart-btn');
        addToCartButton.textContent = 'Add to Cart';

        // Add event listener to add product to cart
        addToCartButton.addEventListener('click', () => addToCart(product));

        // Append elements to the product card
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productRating);
        productCard.appendChild(addToCartButton);

        // Append product card to the grid
        productGrid.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    cartProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
}

// Call loadWishlist when the page is loaded
window.onload = loadWishlist;
