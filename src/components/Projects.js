import React, { Component } from "react";
import burger from "../assets/projects/burger.png";
import bamazon from "../assets/projects/bamazon.png";
import csk from "../assets/projects/csk.png";
import giphy from "../assets/projects/gif.png";
import gitlink from "../assets/projects/github-logo.png";
import hollowknight from "../assets/projects/hollow-knight.png";
import liri from "../assets/projects/liri.png";
import majora from "../assets/projects/majora.png";
import psychic from "../assets/projects/psychic.jpg";
import train from "../assets/projects/train.png";
import whether from "../assets/projects/whether.png";
import cozycouch from "../assets/projects/cozycouch.png";

class Projects extends Component {
  render() {
    return (
      <div class="projects scrollspy" id="portfolio">
        <div class="row">
          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={hollowknight} alt="Hollow Knight" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">
                  Hollow Knight Clicker
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Hollow Knight Clicker<i class="material-icons right">close</i>
                </span>
                <p class="card-text">
                  A Hollow Knight Inspired Number Match/ Clicker Based Number
                  Game
                </p>
                <p>
                  <a
                    href="https://github.com/Poeboyo/unit-4-game"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/unit-4-game/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                {/* <!-- Item Image --> */}
                <img class="activator" src={giphy} alt="Giphy Game" />
              </div>
              <div class="card-content">
                {/* <!-- Item Name / Title --> */}
                <span class="card-title activator grey-text text-darken-4 center">
                  GifTastic App
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  GifTastic App<i class="material-icons right">close</i>
                </span>
                {/* <!-- Description --> */}
                <p class="card-text">
                  By Utilizing the Giphy Api, specific gifs are added to the
                  page with user generated and pre-existing buttons
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/Giphy-Game"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/Giphy-Game/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={train} alt="Train App" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">
                  Train Scheduler
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Train Scheduler<i class="material-icons right">close</i>
                </span>
                <p class="card-text">
                  A Mock Train Scheduler that uses FireBase and Moment.js to
                  keep live data on the trains already on the list
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/Train-Display"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/Train-Display/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={whether} alt="Whether App" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">
                  Whether
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Whether<i class="material-icons right">close</i>
                </span>
                <p class="card-text">
                  Because Who Wouldn't Want A Poem and a Spotify Playlist to go
                  with the Weather(Group Exercise){" "}
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/wedodge89/whether"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://wedodge89.github.io/whether/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                {/* <!-- Item Image --> */}
                <img class="activator" src={csk} alt="College Survival Kit" />
              </div>
              <div class="card-content">
                {/* <!-- Item Name / Title --> */}
                <span class="card-title activator grey-text text-darken-4 center">
                  College Survival Kit
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  College Survival Kit<i class="material-icons right">close</i>
                </span>
                {/* <!-- Description --> */}
                <p class="card-text">
                  Number One Money Saver and Time Waster for the Average College
                  Student
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/collegesurvivalkit"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://poeboyo.github.io/collegesurvivalkit/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  class="activator"
                  src={majora}
                  alt="Majora's Mask Trivia"
                />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">
                  Majora's Mask Trivia
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Majora's Mask Trivia<i class="material-icons right">close</i>
                </span>
                <p class="card-text">
                  Legend of Zelda: Majoras Mask based Trivia{" "}
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/TriviaGame"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <a href="https://poeboyo.github.io/TriviaGame/" target="_blank">
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          {/* <!-- Menu Item --> */}
          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={bamazon} alt="Bamazon CL App" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">
                  Bamazon
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Bamazon<i class="material-icons right">close</i>
                </span>
                <p class="card-text">
                  An Amazon Inspired Command Line Application that utilized
                  Node.js and MySQL Server Hosted on my machine to allow for
                  purchases to be made and Stock to be updated for these
                  hypothetical products
                </p>
                <p>
                  <a href="https://github.com/Poeboyo/bamazon" target="_blank">
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                {/* <!-- Item Image --> */}
                <img class="activator" src={liri} alt="CLI Liri App" />
              </div>
              <div class="card-content">
                {/* <!-- Item Name / Title --> */}
                <span class="card-title activator grey-text text-darken-4 center">
                  Liri App
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Liri App<i class="material-icons right">close</i>
                </span>
                {/* <!-- Description --> */}
                <p class="card-text">
                  A Siri like Command Line App called Liri for legal reasons,
                  using pre-made commands to search for Movies, Songs, Concerts,
                  etc by utilizing multiple APIs
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Poeboyo/liri-node-app"
                    target="_blank"
                  >
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col s m4">
            <div class="card z-depth-4">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={psychic} alt="Psychic Game" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">
                  Psychic Letter Guesser
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Psychic Letter Guesser
                  <i class="material-icons right">close</i>
                </span>
                <p class="card-text">
                  A JavaScript powered Letter Guesser, you play the Psychic,
                  guessing what the Program has preordained to be the correct
                  answer...
                </p>
                <p>
                  {" "}
                  <a href="https://github.com/Poeboyo/psychic" target="_blank">
                    <img
                      class="logo github-link"
                      src={gitlink}
                      alt="Github Link"
                    />
                  </a>
                </p>
                <p>
                  <a href="https://poeboyo.github.io/psychic/" target="_blank">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col s m4">
              <div class="card z-depth-4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={burger} alt="Burger App" />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4 center">
                    Burger Maker/Consumer
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Burger Maker/Consumer
                    <i class="material-icons right">close</i>
                  </span>
                  <p class="card-text">
                    A Small Application that allows a User to Eat a Prepared
                    Burger as well as Consume those created by the user
                    themself.
                  </p>
                  <p>
                    {" "}
                    <a
                      href="https://github.com/Poeboyo/burger-"
                      target="_blank"
                    >
                      <img
                        class="logo github-link"
                        src={gitlink}
                        alt="Github Link"
                      />
                    </a>
                  </p>
                  <p>
                    <a href="https://borgorr.herokuapp.com/" target="_blank">
                      Live Site
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Menu Item --> */}
            <div class="col s m4">
              <div class="card z-depth-4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={cozycouch} alt="A Cozy App" />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4 center">
                    Cozy Couch
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Cozy Couch<i class="material-icons right">close</i>
                  </span>
                  <p class="card-text">
                    A Chill App for vibing, low-fi, and logging favorite
                    activites.
                    <ul>
                      <li>Front End Design: Jeffrey Poe</li>
                      <li>Backend and Routing: Elliot Dodge</li>
                      <li>
                        API Management and Implementation: Tsendpurev Saran
                      </li>
                    </ul>
                  </p>
                  <p>
                    <a href="https://github.com/wedodge89/cozy-couch">
                      <img
                        class="logo github-link"
                        src={gitlink}
                        alt="Github Link"
                      />
                    </a>
                    <a
                      href="https://shelfy-shelf.herokuapp.com/"
                      target="_blank"
                    >
                      <p>Live Site</p>
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
