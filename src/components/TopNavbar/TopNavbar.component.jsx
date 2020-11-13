import React from "react";
import "./TopNavbar.styles.scss";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PaymentIcon from "@material-ui/icons/Payment";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import PanToolIcon from "@material-ui/icons/PanTool";
import GavelIcon from "@material-ui/icons/Gavel";
import GTranslateIcon from "@material-ui/icons/GTranslate";

function TopNavbarComponent() {
  return (
    <div className="TopNavbar">
      {/* first line links */}
      <ul>
        <li>
          <a href="#">
            <PersonIcon className="TopNavbar__icon" />
            Jobs@IITD
          </a>
        </li>
        <li>
          <a href="#">
            <DateRangeIcon className="TopNavbar__icon" />
            Academic Calendar
          </a>
        </li>
        <li>
          <a href="#">
            <GavelIcon className="TopNavbar__icon" />
            Tenders
          </a>
        </li>
        <li>
          <a href="#">
            <PaymentIcon className="TopNavbar__icon" />
            Payment Gateway
          </a>
        </li>
        <li>
          <a href="#">
            <CardTravelIcon className="TopNavbar__icon" />
            Recruite/Career Service
          </a>
        </li>
        <li>
          <a href="#">
            <PanToolIcon className="TopNavbar__icon" />
            IGES
          </a>
        </li>
      </ul>
      {/* middle line links/ social media links */}
      <ul className="TopNavbar__social-media">
        <li>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      {/* last line links/ other links  */}
      <ul>
        <li>
          <a href="#">
            <GTranslateIcon className="TopNavbar__icon" />
            हिंदी /
          </a>
        </li>
        <li>
          <a href="#">- A</a>
        </li>
        <li>
          <a href="#">+ A</a>
        </li>
        <li>
          <a href="#">
            <i
              className="TopNavbar__icon"
              className="fa fa-envelope"
              aria-hidden="true"
            ></i>
            IITD Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopNavbarComponent;
