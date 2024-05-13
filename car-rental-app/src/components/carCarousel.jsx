import React, { useState, useEffect } from "react";
import "./carCarousel.css"; // You can define your CSS styles in a separate file

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // 3 seconds

  const carLogos = [
    "car1.jpg",
    "car2.jpg",
    "car3.jpg",
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {carLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img src={logo} alt={`Car Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
