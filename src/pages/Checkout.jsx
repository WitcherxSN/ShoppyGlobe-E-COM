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
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label>Delivery Address</label>

            <textarea
              placeholder="Enter your delivery address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} × {item.quantity}
              </p>

              <p>
                ₹
                {Math.round(
                  item.price * item.quantity * 90
                ).toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          <h2>
            Total: ₹
            {Math.round(totalPrice * 90).toLocaleString("en-IN")}
          </h2>
          {message && <p>{message}</p>}

          <button type="submit">
            Place Order
          </button>
        </form>
      </main>
    </>
  );
}

export default Checkout;