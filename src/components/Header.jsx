import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);

const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <header>
      <h2>ShoppyGlobe</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart"> 🛒 Cart ({totalItems})</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;