import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem(props) {
  const product = props.product;
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
  <img
    src={product.thumbnail}
    alt={product.title}
    loading="lazy"
  />

  <span
    className={
      product.rating >= 3.7
        ? "rating-badge good-rating"
        : "rating-badge average-rating"
    }
  >
    {product.rating} ★
  </span>
</div>

      <h3>{product.title}</h3>

<p className="product-brand">
  {product.brand || "ShoppyGlobe"}
</p>

<div className="price-section">
  <span className="product-price">
    ₹{Math.round(product.price * 90).toLocaleString("en-IN")}
  </span>

  <span className="original-price">
    ₹
    {Math.round(
      (product.price / (1 - product.discountPercentage / 100)) * 90
    ).toLocaleString("en-IN")}
  </span>

  <span className="discount-text">
    {Math.round(product.discountPercentage)}% off
  </span>
</div>

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