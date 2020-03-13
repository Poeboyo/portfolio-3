import React, { Component } from "react";
import About from "../About";
import Projects from "../Projects";
import MyForm from "../Contact";

class Tabs extends Component {
  render() {
    return (
      <div className="row tab-management z-depth-4">
        <div className="col s12 white">
          <ul className="tabs">
            <li className="active" className="tab col s4 z-depth-4">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="tab col s4 z-depth-4">
              <a href="#about-me">About Me</a>
            </li>
            <li className="tab col s4 z-depth-4">
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
        <div id="about-me" className="col s12">
          <div className="row">
            <div className="col s1 sides"></div>
            <About />
            <div className="col s1 sides"></div>
          </div>
        </div>
        <div id="portfolio" className="col s12">
          <Projects />
        </div>
        <div id="contact-me" className="col s12">
          <MyForm />
        </div>
      </div>
    );
  }
}
export default Tabs;
