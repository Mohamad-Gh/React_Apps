import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Registration from "./Registration";
import SignIn from "./SignIn";

function Header() {
  const [popup, setPopup] = useState(false);
  const [sign, setSign] = useState(false);
  const [bar, setBar] = useState(false);
  function setRigesterPopup() {
    setPopup(!popup);
  }

  // remove the scroll ability when the sign in shows
  if (popup || sign) {
    document.body.classList.add("scroll");
  } else {
    document.body.classList.remove("scroll");
  }
  document.addEventListener("click", (event) => {
    if (bar === true && event.target.id !== "menu-bar") {
      setBar(false);
    }
  });
  document.addEventListener("scroll", (event) => {
    if (bar === true && event.target.id !== "menu-bar") {
      setBar(false);
    }
  });
  const showBar = () => {
    console.log("bar ", bar);
    setBar(!bar);
  };

  return (
    <header>
      <div class="full-container">
        <div class="container-header">
          <Link to="/">
            <img class="company_logo" src={logo} alt="Company Logo" />
          </Link>
          <nav>
            <ul class={`navigator ${bar && "show-bar"}`}>
              <li>
                {/* <a href="">Home</a> */}
                {/* <Route path="/" element={<HomePage}> */}
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* <a href=""></a> */}
                <Link to="/Vehicle Model">Vehicle Model</Link>
              </li>
              <li>
                {/* <a href="">Testimonials</a> */}
                <Link to="/Testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/Our Team">Our Team</Link>
                {/* <a href="">Our Team</a> */}
              </li>
              <li>
                <Link to="/About">About</Link>
                {/* <a href="">About</a> */}
              </li>
            </ul>
          </nav>
          <div class="sign-in">
            <div>
              <button class="btn" onClick={setSign}>
                Sign in{" "}
              </button>
              <button class="btn btn-nav" onClick={setRigesterPopup}>
                {/* <Link className="link" to="/Registration"> */}
                Register
                {/* </Link> */}
              </button>
            </div>
          </div>
          <div onClick={showBar} class="mobile-hamb">
            <svg
              id="menu-bar"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </div>
        </div>
      </div>
      {popup && <Registration triger={setPopup} />}
      {sign && <SignIn triger={setSign} />}
    </header>
  );
}

export default Header;
