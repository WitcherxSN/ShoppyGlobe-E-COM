import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

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
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;