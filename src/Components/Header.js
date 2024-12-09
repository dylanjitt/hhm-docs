import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Nosotros
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Cronograma
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Personal
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" style={{fontSize: "64px"}}>{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2 style={{color: "white"}}>{description}.</h2>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social" style={{alignItems: "center", alignContent: "center", justifyContent: "center", display: "flex"}}>
                <a href="files/Recursos.pdf" className="button btn project-btn" style={{marginRight: "0"}} download="Recursos.pdf">
                  <i className="fa fa-book"></i>Recursos
                </a>
                <a href="files/Herramientas.pdf" className="button btn project-btn" download="Herramientas.pdf">
                  <i className="fa fa-book"></i>Herramientas
                </a>
                <a href="files/Metodologias.pdf" className="button btn project-btn" download="Metodologias.pdf">
                  <i className="fa fa-book"></i>Metodologías y Enfoques
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
