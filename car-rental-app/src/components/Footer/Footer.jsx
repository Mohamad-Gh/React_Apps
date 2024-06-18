import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the destination page with a prop indicating the navigation method
    navigate("/About", { state: { fromClick: true } });
  };
  return (
    <footer>
      <div class="footer">
        <div class="footer-box">
          <h3>Car Rental</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <di>
            <i class="fa-solid fa-phone"></i> (123) 456-789
          </di>
          <div>
            <i class="fa-regular fa-envelope"></i>
            <a href=""> ghalebizadem@gmail.com</a>
          </div>
          <div>
            Design by
            <a href="https://www.linkedin.com/in/mohamad-ghalebizade-210581156">
              <span> Mohamad Gh </span>
            </a>
            2024
          </div>
        </div>
        <div class="footer-box">
          <h3>COMPANY</h3>
          <div>
            <a href="" id="location" onClick={handleClick}>
              Location
            </a>
          </div>
          <div>
            <a href="">Careers</a>
          </div>
          <div>
            <a href="">Mobile</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div>
            <a href="">How We Work</a>
          </div>
        </div>
        <div class="footer-box">
          <h3>WORKING HOURS</h3>
          <div>Mon - Fri: 9:00 AM - 9:00 PM</div>
          <div>Sat: 9:00 AM - 19:00 PM</div>
          <div>Sun: Closed</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
