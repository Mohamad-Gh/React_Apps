import "./carLogos.css"; // You can define your CSS styles in a separate file

import Porsche from "../Assets/images/Logos/Porsche_Logo.png";
import rolls_royce from "../Assets/images/Logos/rolls_royce_Logo.png";
import Mercedes from "../Assets/images/Logos/Mercedes_Logo.png";
import tesla from "../Assets/images/Logos/tesla_Logo.png";
import Lexus from "../Assets/images/Logos/Lexus_Logo.png";
import Chevrolet from "../Assets/images/Logos/Chevrolet_Logo.png";
import Bentley from "../Assets/images/Logos/Bentley_Logo.png";
import Ferrari from "../Assets/images/Logos/Ferrari-Logo.png";

const CarLogos = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const intervalTime = 200; // 0.2 seconds

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

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => prevIndex + 1);
  //     }, intervalTime);

  //     return () => clearInterval(interval);
  //   }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="sides">
          {carLogos.map((logo, index) => (
            <div key={index} className="carousel-item">
              <img src={logo} alt={`Car Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="sides">
          {carLogos.map((logo, index) => (
            <div key={index + 10} className="carousel-item">
              <img src={logo} alt={`Car Logo ${index + 10}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarLogos;
