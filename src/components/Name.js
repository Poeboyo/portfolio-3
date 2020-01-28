import React, { Component } from "react";
import AOS from "aos";

AOS.init({
  duration: 3000
});

class Name extends Component {
  render() {
    return (
      <div data-aos="fade-down">
        <div class="name-poe-backing">
          <h1 class="name-poe">Jeffrey Poe</h1>
          <h3 class="name-poe">Full-Stack Web Developer</h3>
        </div>
      </div>
    );
  }
}

export default Name;
