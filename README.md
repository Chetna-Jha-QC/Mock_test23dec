# Practice After 21-Dec-2024 Mock

## Mock Evaluation test - 21.Dec.2024
This is my practice assignment where I have practiced the Mock Test question given today.

I am adding the question we got for the reference of understanding my page and code.

## Mini-Ecommerce App

### Objective 
Build a multi-page application using HTML, CSS, and JavaScript with the following pages:
1. index.html
2. wishlist.html
3. cart.html

#
Leverage the DOM and Local Storage to manage and persist data between these pages. The application should implement the following features:

### Problem Statement
#### Page 1: index.html
##### Features:
1. Navbar:
- Add a simple navbar with three anchor tags:
⁘ Home: Links to index.html.
⁘ Wishlist: Links to wishlist.html.
⁘ Cart: Links to cart.html.

2. Product Loading:
- Include a button titled Load Products.
- On click, fetch data from the API: https://fakestoreapi.com/products.
- Display the data as cards in a grid layout with 4 cards per row.
- Learn more about fetching data using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

3. Product Details in Card:
- Each card should include:
⁘ Product image
⁘ Product title
⁘ Product price
⁘ Product rating

4. Wishlist Button:
- Add a wishlist Product button to each card.
- On click, save the product to Local Storage under the key wishlisted Products.
- Learn more about Local Storage.


#### Page 2: wishlist.html
##### Features
1. Navbar:
- Same navbar as index.html.

2. Display Wishlisted Products:
- Retrieve data from Local Storage (key: wishlisted Products).
- Display the products as cards in a grid layout with 3 cards per row.

3. Product Details in Card:
- Each card should include:
⁘ Product image
⁘ Product title
⁘ Product price
⁘ Product rating

4. Add to Cart Button:
- Add an Add to Cart button to each card.
- On click, save the product to Local Storage under the key cart Products.

#### Page 3: cart.html
Features
1. Navbar:
- Same navbar as index.ht

2. Display Cart Products
- Retrieve data from Local Storage (key: cartproducts)
- Display the products as cards in a grid layout with 2 cards per row

3. Product Details in Card:
- Each card should include
⁘ Product image
⁘ Product title
⁘ Product price
⁘ Product description
⁘ Product rating

4. Remove from Cart Button
- Add a Remove Fros Cart button to each cari
- On click, remove the item from Local Storage
- Update the displayed cart and total price dynamically.

5. Checkout Section
- Add a v between the Navbar & Product grid that incluties
⁘ An fi3 tag showing the total cart value (dynamic)
⁘ A Chackout button
- Checkout Flow:
⁘ On click, show a confirmation popup: Are you sure to checkout?
⁘ If Yes, wait for 2 seconds, then show an alert: manks for shopping
⁘ Clear all items from the cart and set the total price to zero
6. Dynamic Total Price
- Reflect changes in total price when
⁘ Items are removed from the cart.
⁘ Items are added from the wishlist.
⁘ The cart is empty (show total Price: 0)

### Helpful Resources
- [Fetch API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [FakeStore API Documentation](https://fakestoreapi.com/docs)
- [Local Storage (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Using the DOM to Manipulate Elements (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Using Event Listners (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)