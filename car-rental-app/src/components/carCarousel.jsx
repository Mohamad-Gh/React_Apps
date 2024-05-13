import React, { useState, useEffect } from "react";

import "./carCarousel.css"; // You can define your CSS styles in a separate file
import Porsche from "../Assets/images/Logos/Porsche_Logo.png";
import rolls_royce from "../Assets/images/Logos/rolls_royce_Logo.png";
import Mercedes from "../Assets/images/Logos/Mercedes_Logo.png";
import tesla from "../Assets/images/Logos/tesla_Logo.png";
import Lexus from "../Assets/images/Logos/Lexus_Logo.png";
import Chevrolet from "../Assets/images/Logos/Chevrolet_Logo.png";
import Bentley from "../Assets/images/Logos/Bentley_Logo";
import Ferrari from "../Assets/images/Logos/Ferrari-Logo";

const CarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // 3 seconds

  const carLogos = [
    Porsche,
    rolls_royce,
    Mercedes,
    tesla,
    Lexus,
    Chevrolet,
    Bentley,
    Ferrari,
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

export default CarCarousel;
