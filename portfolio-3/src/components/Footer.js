import React, { Component } from "react";
import gitclick from "../assets/projects/gitclick.png";
import twitter from "../assets/projects/twitter.png";
import linkedin from "../assets/projects/linkedin.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col s4">
            <img src={gitclick} alt="Github Link" class="footer-icon" />
          </div>
          <div class="col s4">
            <img src={twitter} alt="Twitter Link" class="footer-icon" />
          </div>
          <div class="col s4">
            <img src={linkedin} alt="Linked-In Link" class="footer-icon" />
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
