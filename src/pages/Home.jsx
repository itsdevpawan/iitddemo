import React from "react";
import Footer from "../components/footer/Footer";

import HomeMainComponent from "../components/HomeMain/HomeMain.component";
import ImportantAnnouncement from "../components/ImportantAnnouncement/importantAnnouncement.component";
import "./Home.styles.scss";
function Home() {
  return (
    <div>
      <div class="icon-bar">
        <a href="#" class="facebook">
          <i class="fa fa-smile-o" aria-hidden="true"></i>
          <p>Feedback</p>
        </a>
      </div>
      <HomeMainComponent />
      <ImportantAnnouncement />
      <Footer />
    </div>
  );
}

export default Home;
