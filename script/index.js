// Function to load products from API
async function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear existing content

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Rating: ⭐⭐⭐⭐☆</p>
                <button class="wishlist-button" onclick="addToWishlist(${product.id}, '${product.title}', '${product.image}', ${product.price})">Add to Wishlist</button>
            `;

            productGrid.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to add product to wishlist
function addToWishlist(id, title, image, price) {
    let wishlist = JSON.parse(localStorage.getItem('wishlistedProducts')) || [];

    const product = { id, title, image, price };
    if (!wishlist.some(item => item.id === id)) {
        wishlist.push(product);
        localStorage.setItem('wishlistedProducts', JSON.stringify(wishlist));
        alert(`${title} has been added to your wishlist!`);
    } else {
        alert(`${title} is already in your wishlist.`);
    }
}
