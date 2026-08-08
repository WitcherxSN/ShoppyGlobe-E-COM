import Header from "../components/Header";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <Header />

      <div>
        <h1>Welcome to ShoppyGlobe</h1>
        <p>Discover products you'll love.</p>
      </div>
      <ProductList/>
    </>
  );
}

export default Home;