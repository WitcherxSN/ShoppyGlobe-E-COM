import useProducts from "../hooks/useProducts";

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Our Products</h2>

      <div>
        {products.map((product) => (
          <div key={product.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;