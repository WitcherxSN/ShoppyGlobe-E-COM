import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem(props) {
  const product = props.product;
  const dispatch = useDispatch();

  return (
    <div>
      <img
        src={product.thumbnail}
        alt={product.title}
        width="180"
        loading="lazy"
      />

      <h3>{product.title}</h3>

      <p>
        ₹{Math.round(product.price * 90).toLocaleString("en-IN")}
      </p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      <button onClick={() => dispatch(addToCart(product))}>
  Add to Cart
</button>
    </div>
  );
}

export default ProductItem;