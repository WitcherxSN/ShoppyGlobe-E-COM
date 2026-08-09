import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(selectCartItems);

 const totalPrice = useSelector(selectCartTotalPrice);

  return (
     <>
    <Header />

    <main>
      <div className="cart-page">
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>

            <Link to="/">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <p>
                Total Items:
                <span>
                  {cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}
                </span>
              </p>

              <p className="cart-total">
                Total:
                <span>
                  ₹{Math.round(totalPrice * 90).toLocaleString("en-IN")}
                </span>
              </p>

              <Link to="/checkout">
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  </>
  );
}

export default Cart;