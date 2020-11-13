import React from "react";
import "./ServiceLink1.styles.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function ServiceLink1Component() {
  return (
    <div className="servicelink1">
      {/* card component one */}
      <Card
        className="servicelink1__card"
        style={{ backgroundColor: "#f1e3e3" }}
      >
        <CardContent>
          <h4>RESEARCH</h4>
          <i className="fa fa-flask "></i>
          <p>Mapping the Innovations & Collaborations</p>
        </CardContent>
      </Card>

      {/* card component two */}
      <Card
        className="servicelink1__card "
        style={{ color: "white", backgroundColor: "#c21717" }}
      >
        <CardContent>
          <h4>STARTUPS</h4>
          <i className="fa fa-rocket"></i>
          <p>Success stories of researchers & entrepreneurs</p>
        </CardContent>
      </Card>

      {/* card component three */}
      <Card
        className="servicelink1__card"
        style={{ backgroundColor: "#f1e3e3" }}
      >
        <CardContent>
          <h4>NEWS</h4>
          <i className="fa fa-newspaper-o "></i>
          <p>Panorama of Events</p>
        </CardContent>
      </Card>
      {/* card component four */}
      <Card
        className="servicelink1__card "
        style={{ color: "white", backgroundColor: "#c21717" }}
      >
        <CardContent>
          <h4>CAMPUS LIFE</h4>
          <i className="fa fa-users"></i>
          <p>Explore Beyond the Classrooms</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ServiceLink1Component;
