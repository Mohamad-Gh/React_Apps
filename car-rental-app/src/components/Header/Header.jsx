import logo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Registration from "../Registration/Registration";
import SignIn from "../SignIn/SignIn";
import MenuBarMobile from "../MenuBarMobile/MenuBarMobile";

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

  const showBar = () => {
    setBar(!bar);
  };

  return (
    <header>
      <div className="full-container">
        <div className="container-header">
          <Link to="/">
            <img className="company_logo" src={logo} alt="Company Logo" />
          </Link>
          <nav>
            <ul className="navigator">
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
          {bar && <MenuBarMobile menu={setBar} />}
          <div className="sign-in">
            <div>
              <button className="btn" onClick={setSign}>
                Sign in{" "}
              </button>
              <button className="btn btn-nav" onClick={setRigesterPopup}>
                {/* <Link className="link" to="/Registration"> */}
                Register
                {/* </Link> */}
              </button>
            </div>
          </div>
          <div onClick={showBar} className="mobile-hamb">
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
              className="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </div>
        </div>
      </div>
      {popup && <Registration triger={setPopup} trigerSign={setSign} />}
      {sign && <SignIn triger={setSign} trigerRegister={setPopup} />}
    </header>
  );
}

export default Header;
