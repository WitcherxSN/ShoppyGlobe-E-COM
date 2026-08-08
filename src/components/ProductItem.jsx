import { Link } from "react-router-dom";

function ProductItem(props) {
  const product = props.product;

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

      <button>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;