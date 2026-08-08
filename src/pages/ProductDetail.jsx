import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        <img
          src={product.thumbnail}
          alt={product.title}
          width="300"
          loading="lazy"
        />

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <p>
          ₹{Math.round(product.price * 90).toLocaleString("en-IN")}
        </p>

        <p>Rating: ⭐ {product.rating}</p>

        <p>Category: {product.category}</p>
      </main>
    </>
  );
}

export default ProductDetail;