import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>ShoppyGlobe</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;