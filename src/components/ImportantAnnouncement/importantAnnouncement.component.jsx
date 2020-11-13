import React from "react";
import ServiceLink1Component from "../ServiceLink1/ServiceLink1.component";
import "./importantAnnouncement.styles.scss";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function ImportantAnnouncement() {
  return (
    <div className="importantannouncement">
      <ServiceLink1Component />

      <div className="important-announcement">
        <h1>
          <span>important </span>announcements
        </h1>
      </div>
      <div className="hrline " />
      <div className="important-announcement__img">
        <img
          src="https://home.iitd.ac.in/images/ug.jpg"
          alt="important-announcement"
        />
        <p>Last Updated on: November 12 2020.</p>
      </div>
      <hr style={{ backgroundColor: "gray", marginTop: "20px" }} />

      <div className="importantannouncement-link">
        <h2>
          <ArrowRightIcon className="icon" />
          PG Admission (Semester 2) for PhD and MSR
        </h2>
        <h3>
          The Date for PG Admission for PhD and MSR has been extended to 7th
          November 2020, 5:00 PM
        </h3>
      </div>

      <div className="iacard">
        <div className="iacard__delhi">
          <div>
            <h3>
              ABOUT <span>IIT DELHI</span>
            </h3>
            <p>
              Indian Institute of Technology Delhi is one of the Twenty Three
              IITs created to be Centres of Excellence for training, research
              and development in science, engineering and technology in India.
              Established as College of Engineering in 1961, the Institute was
              later declared as an Institution of...
            </p>
            <button>Read more</button>
            <button
              style={{
                backgroundColor: "#c21717",
                color: "white",
                marginLeft: "10px",
                border: "none",
              }}
            >
              Newsletter August 2020
            </button>
          </div>
          <div className="iacard__delhi_video">
            <video
              style={{ marginLeft: "20px" }}
              width="320"
              height="240"
              controls
            >
              <source
                src="https://home.iitd.ac.in/uploads/IIT-Delhi-Campus-Tour.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* directors corner */}

        <div className="ia__dc">
          <h3>
            DIRECTOR'S <span> CORNER</span>
          </h3>
          <div className="ia__dc_child">
            <div>
              <img
                src="https://home.iitd.ac.in/images/director-h.jpg"
                alt="director"
              />
            </div>
            <div className="ia__dc_child_data">
              <p>Prof. V. Ramgopal Rao</p>
              <span>
                Welcome to IIT Delhi. You have arrived at one of the finest
                institutions in India, an institution that is ranked among the
                top 50 in the world for Engineering & Technology in the recent
                QS world subject rankings...
              </span>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantAnnouncement;
