import React, { Component } from "react";
import headshot from "../assets/projects/headshotcopy.jpeg";
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

class About extends Component {
  render() {
    return (
      <div class="col s10 about-content">
        <div class="row" id="about-box">
          <div class="col s7">
            {" "}
            <img
              class="headshot"
              src={headshot}
              alt="Jeffrey Poe Profile Shot"
            />
          </div>

          <div class="about-text col s5">
            <p class="abttxt center-align">
              My name is Jeffrey Poe and I entered the UCF Coding Bootcamp to
              develop skills in Full-Stack Development to hopefully achieve a
              position in the Tech Space while simultaneously pouring countless
              hours self-teaching at home to improve as well as attending
              College via Online Classes
            </p>
            <p class="abttxt center-align">
              I have learned skills in Markup and Programming Languages such as
              HTML, CSS, and JavaScript and have become familiarized with
              Libraries and Frameworks such as BootStrap, Materialize, jQuery,
              Node.js, Express, MySQL, Sequelize, MongoDB, and React
            </p>
            <div class="row bruh">
              <div class="col s3">
                <img src={html} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={css} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={js} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={bootstrap} alt="icon" class="icon-set" />
              </div>
            </div>
            <div class="row bruh">
              <div class="col s3">
                <img src={materialize} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={handlebars} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={node} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={express} alt="icon" class="icon-set" />
              </div>
            </div>

            <div class="row bruh">
              <div class="col s3">
                <img src={mysql} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={firebase} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={mongodb} alt="icon" class="icon-set" />
              </div>
              <div class="col s3">
                <img src={sequelize} alt="icon" class="icon-set" />
              </div>
            </div>
            <div class="row bruh">
              <div class="col s3">
                <img src={reactlogo} alt="icon" class="icon-set" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
