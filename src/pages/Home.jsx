import Header from "../components/Header";
import ProductList from "../components/ProductList";
import HeroSlider from "../components/HeroSlider";

function Home() {
  return (
    <>
      <Header />

      <div className="slider-wrapper">
        <HeroSlider />
      </div>

      <main>
        <ProductList />
      </main>
    </>
  );
}

export default Home;