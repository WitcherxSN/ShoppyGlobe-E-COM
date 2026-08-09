import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
// Fetch the selected product using the ID from the URL
  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
     <>
    <Header />

    <main>
      <div className="product-detail-card">

        <div className="product-detail-image">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
          />
        </div>

        <div className="product-detail-info">

          <span className="detail-category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <p className="detail-description">
            {product.description}
          </p>

          <p className="detail-rating">
            ⭐ {product.rating} / 5
          </p>

          <h2 className="detail-price">
            ₹{Math.round(product.price * 90).toLocaleString("en-IN")}
          </h2>

          <div className="detail-buttons">
  <button
  className="detail-cart-btn"
  onClick={() => dispatch(addToCart(product))}
>
  Add to Cart
</button>

  <button className="buy-now-btn">
    Buy Now
  </button>
</div>

        </div>
      </div>
    </main>
  </>
  );
}

export default ProductDetail;