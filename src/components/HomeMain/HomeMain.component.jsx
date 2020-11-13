import React from "react";
import HomeMainCarouselelement from "../../elements/HomeMainCarousel/HomeMainCarousel.element";
import BottomNavbarComponent from "../BottomNavbar/BottomNavbar.component";
import NavbarComponent from "../Navbar/Navbar.component";
import TopNavbarComponent from "../TopNavbar/TopNavbar.component";
import MainHeadText from "../../elements/MainHeadText/MainHeadText.element"
function HomeMainComponent() {
  return (
    <div>
      <TopNavbarComponent />
      <NavbarComponent />
      <BottomNavbarComponent />
      <MainHeadText/>
      <HomeMainCarouselelement />
    </div>
  );
}

export default HomeMainComponent;
