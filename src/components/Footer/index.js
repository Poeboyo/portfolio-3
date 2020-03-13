import React, { Component } from "react";
import gitclick from "../../assets/projects/gitclick.png";
import linkedin from "../../assets/projects/linkedin.png";
import codewars from "../../assets/projects/codewars.png";

class Footer extends Component {
  render() {
    return (
      <div className="row center-align" id="footer">
        <div className="col s4">
          <a
            href="https://github.com/Poeboyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitclick} alt="Github Link" className="github-footer" />
          </a>
        </div>
        <div className="col s4">
          <a
            href="https://www.linkedin.com/in/jeffrey-poe-0b6b08158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linked-In Link" className="footer-icon" />
          </a>
        </div>
        <div className="col s4">
          <a
            href="https://www.codewars.com/users/Poeboyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codewars} alt="Codewars Link" className="codewars" />
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
