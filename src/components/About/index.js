import React, { Component } from "react";
import headshot from "../../assets/projects/headshotcopy.jpeg";
import bootstrap from "../../assets/bootstrap-logo.png";
import js from "../../assets/js-logo.png";
import handlebars from "../../assets/handlebars-logo.png";
import node from "../../assets/node-logo.png";
import express from "../../assets/express-logo.png";
import css from "../../assets/css-logo.png";
import firebase from "../../assets/firebase-logo.png";
import html from "../../assets/html-logo.png";
import materialize from "../../assets/materialize-logo.png";
import mongodb from "../../assets/mongodb-logo.png";
import mysql from "../../assets/mysql-logo.png";
import reactlogo from "../../assets/react-logo.png";
import sequelize from "../../assets/sequelize-logo.png";

class About extends Component {
  render() {
    return (
      <div className="col s10 about-content">
        <div className="center-align resume">
          <a href="https://docs.google.com/document/d/1tZSWe2s0eQRdobAexSXQWpEuq4lDlbOKbzQ3U7dY3oc/view">
            View My Resume Here
          </a>
        </div>
        <div className="row" id="about-box">
          <div className="col s12 align-center">
            <img
              className="headshot"
              src={headshot}
              alt="Jeffrey Poe Profile Shot"
            />
          </div>
        </div>
        <div className="row about-content">
          <div className="about-text col s12">
            <p className="abttxt center-align">
              My name is Jeffrey Poe and I entered the UCF Coding Bootcamp to
              develop skills in Full-Stack Development to hopefully achieve a
              position in the Tech Space while simultaneously pouring countless
              hours self-teaching at home to improve as well as attending
              College via Online Classes
            </p>
            <p className="abttxt center-align">
              I have learned skills in Markup and Programming Languages such as
              HTML, CSS, and JavaScript and have become familiarized with
              Libraries and Frameworks such as BootStrap, Materialize, jQuery,
              Node.js, Express, MySQL, Sequelize, MongoDB, FireBase, and React
            </p>
          </div>
        </div>

        <div className="row bruh hide-on-small-only">
          <div className="col s3">
            <img src={html} alt="icon" className="icon-set" alt="html" />
          </div>
          <div className="col s3">
            <img src={css} alt="icon" className="icon-set" alt="css" />
          </div>
          <div className="col s3">
            <img src={js} alt="icon" className="icon-set" alt="js" />
          </div>
          <div className="col s3">
            <img
              src={bootstrap}
              alt="icon"
              className="icon-set"
              alt="bootstrap"
            />
          </div>
        </div>
        <div className="row bruh hide-on-small-only">
          <div className="col s3">
            <img
              src={materialize}
              alt="icon"
              className="icon-set"
              alt="materialize"
            />
          </div>
          <div className="col s3">
            <img
              src={handlebars}
              alt="icon"
              className="icon-set"
              alt="handlebars"
            />
          </div>
          <div className="col s3">
            <img src={node} alt="icon" className="icon-set" alt="node" />
          </div>
          <div className="col s3">
            <img src={express} alt="icon" className="icon-set" alt="express" />
          </div>
        </div>

        <div className="row bruh hide-on-small-only">
          <div className="col s3">
            <img src={mysql} alt="icon" className="icon-set" alt="mysql" />
          </div>
          <div className="col s3">
            <img
              src={firebase}
              alt="icon"
              className="icon-set"
              alt="firebase"
            />
          </div>
          <div className="col s3">
            <img src={mongodb} alt="icon" className="icon-set" alt="mongo" />
          </div>
          <div className="col s3">
            <img
              src={sequelize}
              alt="icon"
              className="icon-set"
              alt="sequelize"
            />
          </div>
        </div>
        <div className="row bruh hide-on-small-only">
          <div className="col s3">
            <img src={reactlogo} alt="icon" className="icon-set" alt="react" />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
