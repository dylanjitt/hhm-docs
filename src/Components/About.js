import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    const profilepic = "images/" + "dylan.jpg";
    const profilepic1 = "images/" + "vivs.jpg";
    const profilepic2 = "images/" + "perry.jpg";
    const profilepic3 = "images/" + "kat.jpg";

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Dylan Jitton</h2>

              <p>Desarrollador Frontend</p>
            </div>
          </div>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic1}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Vivian Marino</h2>

              <p>Desarrollador FullStack</p>
            </div>
          </div>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic2}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Luis Paricollo</h2>

              <p>Desarrollador Backend</p>
            </div>
          </div>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic3}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Katzumi Urdininea</h2>

              <p>Especialista QA</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
