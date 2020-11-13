import React from "react";
import "./footer.styles.scss";

function Footer() {
  return (
    <div className="footerman">
      <img src="https://home.iitd.ac.in/images/footer-bg.jpg" alt="" />
      <div className="footer">
        <div className="qrt">
          <p>
            Copyright &copy; 2020 Indian Institute of Technology Delhi. All
            rights reserved. <span>Credits & Attributions</span>
          </p>
        </div>
        <div>
          <p>
            Developed & Maintained by <span>CSC IIT Delhi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
