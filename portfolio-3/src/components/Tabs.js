import React, { Component } from "react";

class Tabs extends Component {
  render() {
    return (
      <div class="row tab-management">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s4">
              <a href="#about-me">About Me / Resume </a>
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
          Test 1
        </div>
        <div id="portfolio" class="col s12">
          Test 2
        </div>
        <div id="contact-me" class="col s12">
          Test 3
        </div>
      </div>
    );
  }
}
export default Tabs;
