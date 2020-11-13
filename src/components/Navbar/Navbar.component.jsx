import React from "react";
import "./Navbar.styles.scss";

function NavbarComponent() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <img
          className="navbar__logo"
          src="https://home.iitd.ac.in/images/logo-iit.png"
          alt="logo"
        />
        <h1>Indian Institute of Technology Delhi</h1>
      </div>
      <div className="navbar__address">
        <div>
          <p>INDIAN INSTITUTE OF TECHNOLOGY DELHI</p>
          <span>Hauz Khas, New Delhi-110016, India</span>
        </div>
        <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
