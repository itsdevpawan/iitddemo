import React from "react";
import "./BottomNavbar.styles.scss";

function BottomNavbarComponent() {
  return (
    <div className="BottomNavbar">
      <div className="BottomNavbar__items">
        <ul>
          <li className="BottomNavbar__homeIcon">
            <i class="fa fa-home" aria-hidden="true"></i>
          </li>
          <li>
            <p>
              Academics <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>
              Admissions <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>
              For Students <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>
              For Faculty <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>
              Research <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>
              Alumni <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>
              Resources <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </li>
          <li>
            <p>Leadership</p>
          </li>
          <li>
            <i class="fa fa-search" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNavbarComponent;
