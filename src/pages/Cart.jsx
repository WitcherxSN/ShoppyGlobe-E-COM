import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <main>
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <div>
              <h2>
                Total: ₹
                {Math.round(totalPrice * 90).toLocaleString("en-IN")}
              </h2>

              <Link to="/checkout">
                <button>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Cart;