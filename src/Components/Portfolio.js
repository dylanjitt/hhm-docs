import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
<section id="portfolio">
  <Fade left duration={1000} distance="40px">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Personal</h1>

        <div id="portfolio-wrapper" className="portfolio-container">
          <div className="row">
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>Desarrollador Backend</h3>
                  <p>Experiencia: Express JS</p>
                </div>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>Desarrollador Frontend</h3>
                  <p>Experiencia: React JS</p>
                </div>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>Desarrollador Fullstack</h3>
                  <p>Experiencia: React JS, Express JS</p>
                </div>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>QA</h3>
                  <p>Experiencia: Mocha, Chai, Jest, Cypress, JMeter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>Especialista DBA</h3>
                  <p>Experiencia: MySQL</p>
                </div>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>Especialista DevOps</h3>
                  <p>Experiencia: AWS, Nginx, GithubActions, Jenkins</p>
                </div>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <h3>Diseñador</h3>
                  <p>Experiencia: Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fade>
</section>

    );
  }
}

export default Portfolio;
