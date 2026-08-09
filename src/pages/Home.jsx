import Header from "../components/Header";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <Header />
         <div className="hero-banner">
  <img
    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    alt="Shopping banner"
  />

  <div className="hero-overlay">
    <h1>Shop Smarter with ShoppyGlobe</h1>

    <p>
      Discover trending products, great deals,
      and everyday essentials.
    </p>

    <a href="#products">
      Shop Now
    </a>
  </div>
</div>
      {/* <div className="hero">
        <h1>Welcome to ShoppyGlobe</h1>
        <p>Discover products you'll love.</p>
      </div> */}
      <ProductList/>
    </>
  );
}

export default Home;