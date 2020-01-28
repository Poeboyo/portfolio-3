import React, { Component } from "react";
import About from "./About";
import Projects from "./Projects";
import MyForm from "./Contact";
import Footer from "./Footer";

class Tabs extends Component {
  render() {
    return (
      <div class="row tab-management">
        <div class="col s12 white">
          <ul class="tabs">
            <li class="tab col s4">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li class="tab col s4">
              <a class="active" href="#about-me">
                About Me / Resume
              </a>
            </li>
            <li class="tab col s4">
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
        <div id="about-me" class="col s12">
          <div class="row">
            <div class="col s3 sides"></div>
            <About />
            <div class="col s3 sides"></div>
          </div>
        </div>
        <div id="portfolio" class="col s12">
          <Projects />
        </div>
        <div id="contact-me" class="col s12">
          <MyForm />
        </div>
      </div>
      <div>
         <Footer />
      <div/>
   
   
    );
  }
}
export default Tabs;
