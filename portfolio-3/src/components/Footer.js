import React, { Component } from "react";
import gitclick from "../assets/projects/gitclick.png";
import twitter from "../assets/projects/twitter.png";
import linkedin from "../assets/projects/linkedin.png";
import codewars from "../assets/projects/codewars.png";

class Footer extends Component {
  render() {
    return (
      <div class="row center-align" id="footer">
        <div class="col s3">
          <a href="https://twitter.com/_Poe_Boy_" target="_blank">
            <img src={twitter} alt="Twitter Link" class="footer-icon" />
          </a>
        </div>
        <div class="col s3">
          <a href="https://github.com/Poeboyo" target="_blank">
            <img src={gitclick} alt="Github Link" class="github-footer" />
          </a>
        </div>
        <div class="col s3">
          <a
            href="https://www.linkedin.com/in/jeffrey-poe-0b6b08158/"
            target="_blank"
          >
            <img src={linkedin} alt="Linked-In Link" class="footer-icon" />
          </a>
        </div>
        <div class="col s3">
          <a href="https://www.codewars.com/users/Poeboyo" target="_blank">
            <img src={codewars} alt="Codewars Link" class="codewars" />
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
