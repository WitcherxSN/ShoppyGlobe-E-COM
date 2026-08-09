import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const cartItems = useSelector(selectCartItems);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = useSelector(selectCartTotalPrice);

  function handleSubmit(event) {
  event.preventDefault();

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    address.trim() === ""
  ) {
    setMessage("Please fill in all fields.");
    return;
  }

  if (cartItems.length === 0) {
    setMessage("Your cart is empty.");
    return;
  }

  setMessage("Order placed");

  dispatch(clearCart());

  setTimeout(() => {
    navigate("/");
  }, 1500);
}

  return (
    <>
    <Header />

    <main>
      <div className="checkout-page">

        <div className="checkout-form-card">
          <h1>Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="checkout-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="checkout-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="checkout-group">
              <label>Delivery Address</label>

              <textarea
                placeholder="Enter your delivery address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>

            {message && (
              <p className="checkout-message">
                {message}
              </p>
            )}

            <button
              className="place-order-btn"
              type="submit"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div
              className="checkout-summary-item"
              key={item.id}
            >
              <span>
                {item.title} × {item.quantity}
              </span>

              <span>
                ₹
                {Math.round(
                  item.price * item.quantity * 90
                ).toLocaleString("en-IN")}
              </span>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>

            <span>
              ₹{Math.round(totalPrice * 90).toLocaleString("en-IN")}
            </span>
          </div>
        </div>

      </div>
    </main>
  </>
  );
}

export default Checkout;