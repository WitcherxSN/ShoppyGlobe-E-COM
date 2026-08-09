import { useEffect, useState } from "react";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Discover Your Style",
      text: "Shop the latest products at ShoppyGlobe.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      title: "Upgrade Your Everyday",
      text: "Explore trending products and everyday essentials.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      title: "Deals You'll Love",
      text: "Find great products at great prices.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previousSlide) => {
        if (previousSlide === slides.length - 1) {
          return 0;
        }

        return previousSlide + 1;
      });
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="hero-slider">

      <img
        src={slide.image}
        alt={slide.title}
      />

      <div className="slider-content">
        <h1>{slide.title}</h1>

        <p>{slide.text}</p>

        <a href="#products">
          Shop Now
        </a>
      </div>

      <button
        className="slider-left"
        onClick={() =>
          setCurrentSlide(
            currentSlide === 0
              ? slides.length - 1
              : currentSlide - 1
          )
        }
      >
        ❮
      </button>

      <button
        className="slider-right"
        onClick={() =>
          setCurrentSlide(
            currentSlide === slides.length - 1
              ? 0
              : currentSlide + 1
          )
        }
      >
        ❯
      </button>

      <div className="slider-dots">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={
              currentSlide === index
                ? "slider-dot active-dot"
                : "slider-dot"
            }
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

    </div>
  );
}

export default HeroSlider;