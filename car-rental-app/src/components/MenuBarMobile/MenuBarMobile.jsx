import React from "react";
import { Link } from "react-router-dom";

function MenuBarMobile() {
  return (
    <div className="full-container">
      <div className="container-header">
        <nav>
          <ul className="navigator show-bar">
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
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MenuBarMobile;
