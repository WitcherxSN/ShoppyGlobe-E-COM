#  ShoppyGlobe

ShoppyGlobe is a modern e-commerce web application built using React, Redux Toolkit, React Router, and the DummyJSON API.

The application allows users to browse products, search for products, view detailed product information, manage a shopping cart, and complete a simulated checkout process.

#  Github Link
  [https://github.com/WitcherxSN/ShoppyGlobe-E-COM.git]

##  Features

- Browse products fetched from the DummyJSON API
- Search and filter products
- View detailed information for individual products
- Product brand, rating, pricing, and discount information
- Add products to the shopping cart
- Increase and decrease product quantity
- Remove products from the cart
- Dynamic cart item counter
- Automatic cart total calculation
- Checkout form with order summary
- Place order functionality
- Cart automatically clears after placing an order
- Automatic redirect to Home after order placement
- 404 Page Not Found handling
- Responsive design for desktop, tablet, and mobile
- Product image lazy loading
- React component lazy loading using React.lazy and Suspense
- Automatic hero image slider with manual navigation
- Redux-based product search and cart management

##  Technologies Used

- React
- JavaScript
- Redux Toolkit
- React Redux
- React Router DOM
- Vite
- CSS3
- DummyJSON API

##  Project Structure


src/

 components/
    Header.jsx
    HeroSlider.jsx
    ProductList.jsx
    ProductItem.jsx
    CartItem.jsx

 pages/
    Home.jsx
    ProductDetail.jsx
    Cart.jsx
    Checkout.jsx
    NotFound.jsx

 hooks/
    useProducts.js

 redux/
     store.js
     cartSlice.js
     searchSlice.js

 App.css
  index.css
  main.jsx


##  API Used

Product data is fetched from the DummyJSON Products API.


https://dummyjson.com/products


Individual products are fetched using their product ID.


https://dummyjson.com/products/:id


##  Redux State Management

Redux Toolkit is used for global state management.

### Cart State

The cart supports:

- Add to cart
- Remove from cart
- Increase quantity
- Decrease quantity
- Clear cart
- Cart item selectors
- Cart total selectors

The quantity of a product cannot decrease below 1.

### Search State

The product search term is stored in Redux and is used to filter products displayed in the product list.

##  Routing

React Router is used with `createBrowserRouter`.

Available routes:


/               Home
/product/:id    Product Details
/cart           Shopping Cart
/checkout       Checkout
*               404 Page


Dynamic routing is used to display individual products based on their product ID.

##  Performance Optimization

The application includes performance optimizations such as:

- `React.lazy()` for page-level code splitting
- `Suspense` fallback while components load
- `loading="lazy"` for product images

##  Shopping Cart

Users can add products to their cart from both the product listing and product details pages.

The cart allows users to:

- Increase quantity
- Decrease quantity
- Remove products
- View total items
- View the total cart price
- Proceed to checkout

##  Checkout

The Checkout page contains a user details form and an order summary.

After successfully placing an order:

1. An "Order placed" message is displayed.
2. The Redux cart is cleared.
3. The user is automatically redirected to the Home page.

##  UI Features

ShoppyGlobe includes:

- Responsive product grid
- Ecommerce-style product cards
- Product rating badges
- Brand information
- Original and discounted pricing
- Discount percentage
- Responsive navigation
- Hero image slider
- Automatic slider transitions
- Slider navigation arrows and indicators
- Product detail layout
- Styled shopping cart
- Responsive checkout page
- Custom 404 page

##  Installation

Clone the repository:


git clone [https://github.com/WitcherxSN/ShoppyGlobe-E-COM.git]

Move into the project directory:


cd shoppyglobe


Install dependencies:


npm install


Start the development server:

npm run dev


Open the local URL displayed by Vite in your browser.

##  Responsive Design

The application is designed to work across:

- Desktop
- Tablet
- Mobile devices

CSS media queries and responsive layouts are used to adapt product cards, navigation, cart items, checkout forms, and product details to different screen sizes.

##  Future Improvements

Possible future improvements include:

- User authentication
- Product categories and advanced filters
- Wishlist functionality
- Persistent cart using localStorage
- Real payment gateway integration
- Backend and database integration
- User order history
- More Styling

##  Author

**Shravan Naik**

Full Stack Development Project