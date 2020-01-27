import React, { Component } from "react";
import Sky from "react-sky";
import bootstrap from "../assets/bootstrap-logo.png";
import js from "../assets/js-logo.png";
import handlebars from "../assets/handlebars-logo.png";
import node from "../assets/node-logo.png";
import express from "../assets/express-logo.png";
import css from "../assets/css-logo.png";
import firebase from "../assets/firebase-logo.png";
import html from "../assets/html-logo.png";
import materialize from "../assets/materialize-logo.png";
import mongodb from "../assets/mongodb-logo.png";
import mysql from "../assets/mysql-logo.png";
import reactlogo from "../assets/react-logo.png";
import sequelize from "../assets/sequelize-logo.png";

class Skies extends Component {
  render() {
    return (
      <div className="sky-box">
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: js,
            1: bootstrap,
            2: handlebars,
            3: node,
            4: express,
            5: css,
            6: firebase,
            7: html,
            8: materialize,
            9: mongodb,
            10: mysql,
            11: reactlogo,
            12: sequelize
          }}
          how={140}
          time={70} /* time of animation */
          size={"115px"} /* size of the rendered images */
          background={"#23395d"} /* color of background */
        />
      </div>
    );
  }
}

export default Skies;
