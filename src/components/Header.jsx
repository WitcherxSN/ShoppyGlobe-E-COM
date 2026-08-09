import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../redux/cartSlice";

function Header() {
   const totalItems = useSelector(selectCartTotalItems);
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