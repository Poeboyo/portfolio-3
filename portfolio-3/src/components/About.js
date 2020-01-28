import React, { Component } from "react";
import headshot from "../assets/projects/headshotcopy.jpeg";

class About extends Component {
  render() {
    return (
      <div class="col s6 about-content">
        <img class="headshot" src={headshot} alt="Jeffrey Poe Profile Shot" />
      </div>
    );
  }
}
export default About;
