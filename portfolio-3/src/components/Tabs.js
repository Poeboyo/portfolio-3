import React, { Component } from "react";

class Tabs extends Component {
  render() {
    return (
      <div class="row tab-management">
        <div class="col s12 white">
          <ul class="tabs">
            <li class="tab col s4">
              <a href="#about-me">About Me / Resume</a>
            </li>
            <li class="tab col s4">
              <a class="active" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="tab col s4">
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
        <div id="about-me" class="col s12">
          <div class="row">
            <div class="col s4 sides"></div>
            <div class="col s4"></div>
            <div class="col s4 sides"></div>
          </div>
        </div>
        <div id="portfolio" class="col s12">
          Portfolio
        </div>
        <div id="contact-me" class="col s12">
          Contact Me
        </div>
      </div>
    );
  }
}
export default Tabs;
