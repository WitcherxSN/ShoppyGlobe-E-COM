import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

function ProductList() {
  // Fetch product data using the custom hook
  const { products, loading, error } = useProducts();

  const dispatch = useDispatch();
 // Get the current search term from Redux
  const searchTerm = useSelector(
    (state) => state.search.term
  );
// Filter products based on the user's search
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-section" id="products">
      <h2>Our Products</h2>

      <input className="search-box"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) =>
          dispatch(setSearchTerm(event.target.value))
        }
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
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