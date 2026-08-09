import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem(props) {
  const product = props.product;
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <h3>{product.title}</h3>

      <p className="product-price">
        ₹{Math.round(product.price * 90).toLocaleString("en-IN")}
      </p>

      <div className="product-actions">
        <Link
          className="details-btn"
          to={`/product/${product.id}`}
        >
          View Details
        </Link>

        <button
          className="add-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;