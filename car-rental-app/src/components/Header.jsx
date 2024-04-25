import logo from "../Assets/images/logo.png";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import App from "./App";

function Header() {
  return (
    <header>
      <div class="full-container">
        <div class="container-header">
          <img class="company_logo" src={logo} alt="Company Logo" />
          <nav>
            <ul class="navigator">
              <li>
                {/* <a href="">Home</a> */}
                {/* <Route path="/" element={<HomePage}> */}
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="">Vehicle Model</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <Link to="/about">About</Link>
                {/* <a href="">About</a> */}
              </li>
            </ul>
          </nav>
          <div class="sign-in">
            <div>
              <button class="btn">Sign in</button>
              <button class="btn btn-nav">Register</button>
            </div>
          </div>
          <div class="mobile-hamb">
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
    </header>
  );
}

export default Header;
