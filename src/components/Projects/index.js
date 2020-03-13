import React, { Component } from "react";
import burger from "../../assets/projects/burger.png";
import bamazon from "../../assets/projects/bamazon.png";
import csk from "../../assets/projects/csk.png";
import giphy from "../../assets/projects/gif.png";
import gitlink from "../../assets/projects/github-logo.png";
import hollowknight from "../../assets/projects/hollow-knight.png";
import liri from "../../assets/projects/liri.png";
import majora from "../../assets/projects/majora.png";
import psychic from "../../assets/projects/psychic.jpg";
import train from "../../assets/projects/train.png";
import whether from "../../assets/projects/whether.png";
import cozycouch from "../../assets/projects/cozycouch.png";
import memory from "../../assets/projects/memory.png";

class Projects extends Component {
  render() {
    return (
      <div className="projects scrollspy" id="portfolio">
        <div className="row">
          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={hollowknight}
                  alt="Hollow Knight"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 center">
                  Hollow Knight Clicker
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Hollow Knight Clicker
                  <i className="material-icons right">close</i>
                </span>
                <p className="card-text">
                  A Hollow Knight Inspired Number Match/ Clicker Based Number
                  Game
                </p>
                <p>
                  <a
                    href="https://github.com/Poeboyo/hallownest-hoarder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/hallownest-hoarder/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                {/* <!-- Item Image --> */}
                <img className="activator" src={giphy} alt="Giphy Game" />
              </div>
              <div className="card-content">
                {/* <!-- Item Name / Title --> */}
                <span className="card-title activator grey-text text-darken-4 center">
                  GifTastic App
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  GifTastic App<i className="material-icons right">close</i>
                </span>
                {/* <!-- Description --> */}
                <p className="card-text">
                  By Utilizing the Giphy Api, specific gifs are added to the
                  page with user generated and pre-existing buttons
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/Giphy-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/Giphy-Game/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={train} alt="Train App" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 center">
                  Train Scheduler
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Train Scheduler<i className="material-icons right">close</i>
                </span>
                <p className="card-text">
                  A Mock Train Scheduler that uses FireBase and Moment.js to
                  keep live data on the trains already on the list
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/Train-Display"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/Train-Display/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={whether} alt="Whether App" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 center">
                  Whether
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Whether<i className="material-icons right">close</i>
                </span>
                <p className="card-text">
                  Because Who Wouldn't Want A Poem and a Spotify Playlist to go
                  with the Weather(Group Exercise){" "}
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/wedodge89/whether"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://wedodge89.github.io/whether/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                {/* <!-- Item Image --> */}
                <img
                  className="activator"
                  src={csk}
                  alt="College Survival Kit"
                />
              </div>
              <div className="card-content">
                {/* <!-- Item Name / Title --> */}
                <span className="card-title activator grey-text text-darken-4 center">
                  College Survival Kit
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  College Survival Kit
                  <i className="material-icons right">close</i>
                </span>
                {/* <!-- Description --> */}
                <p className="card-text">
                  Number One Money Saver and Time Waster for the Average College
                  Student
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/collegesurvivalkit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/collegesurvivalkit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={majora}
                  alt="Majora's Mask Trivia"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 center">
                  Majora's Mask Trivia
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Majora's Mask Trivia
                  <i className="material-icons right">close</i>
                </span>
                <p className="card-text">
                  Legend of Zelda: Majoras Mask based Trivia{" "}
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/TriviaGame"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <a
                  href="https://poeboyo.github.io/TriviaGame/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <!-- Menu Item --> */}
          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={bamazon} alt="Bamazon CL App" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 center">
                  Bamazon
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Bamazon<i className="material-icons right">close</i>
                </span>
                <p className="card-text">
                  An Amazon Inspired Command Line Application that utilized
                  Node.js and MySQL Server Hosted on my machine to allow for
                  purchases to be made and Stock to be updated for these
                  hypothetical products
                </p>
                <p>
                  <a
                    href="https://github.com/Poeboyo/bamazon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>

          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                {/* <!-- Item Image --> */}
                <img className="activator" src={liri} alt="CLI Liri App" />
              </div>
              <div className="card-content">
                {/* <!-- Item Name / Title --> */}
                <span className="card-title activator grey-text text-darken-4 center">
                  Liri App
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Liri App<i className="material-icons right">close</i>
                </span>
                {/* <!-- Description --> */}
                <p className="card-text">
                  A Siri like Command Line App called Liri for legal reasons,
                  using pre-made commands to search for Movies, Songs, Concerts,
                  etc by utilizing multiple APIs
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/liri-node-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col s m4">
            <div className="card z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={psychic} alt="Psychic Game" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 center">
                  Psychic Letter Guesser
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Psychic Letter Guesser
                  <i className="material-icons right">close</i>
                </span>
                <p className="card-text">
                  A JavaScript powered Letter Guesser, you play the Psychic,
                  guessing what the Program has preordained to be the correct
                  answer...
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/psychic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/psychic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s m4">
              <div className="card z-depth-4">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={burger} alt="Burger App" />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">
                    Burger Maker/Consumer
                  </span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Burger Maker/Consumer
                    <i className="material-icons right">close</i>
                  </span>
                  <p className="card-text">
                    A Small Application that allows a User to Eat a Prepared
                    Burger as well as Consume those created by the user
                    themself.
                  </p>
                  <p>
                    {" "}
                    <a
                      href="https://github.com/Poeboyo/burger-"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo github-link"
                        src={gitlink}
                        alt="Github Link"
                      />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://borgorr.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Menu Item --> */}
            <div className="col s m4">
              <div className="card z-depth-4">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={cozycouch} alt="A Cozy App" />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">
                    Cozy Couch
                  </span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Cozy Couch<i className="material-icons right">close</i>
                  </span>
                  <p className="card-text"></p>A Chill App for vibing, low-fi,
                  and logging favorite activites.
                  <p>Front End Design: Jeffrey Poe</p>{" "}
                  <p>Backend and Routing: Elliot Dodge</p>{" "}
                  <p>API Management and Implementation: Tsendpurev Saran</p>
                  <a
                    href="https://github.com/wedodge89/cozy-couch"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                  <a
                    href="https://shelfy-shelf.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
            <div className="col s m4">
              <div className="card z-depth-4">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={memory} alt="Memory Game" />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">
                    Witcher Memory Game
                  </span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Witcher Memory Game
                    <i className="material-icons right">close</i>
                  </span>
                  <p className="card-text">
                    A Witcher 3: The Wild Hunt Inspired Memory Game
                  </p>
                  <p>
                    <a
                      href="https://github.com/Poeboyo/memory-game"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo github-link"
                        src={gitlink}
                        alt="Github Link"
                      />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://poeboyo.github.io/memory-game/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
