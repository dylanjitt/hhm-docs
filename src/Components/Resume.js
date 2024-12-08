import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Inicio</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p><b>Duración:</b> 1 Sprint</p>
                  <p>Reunión inicial con HHM para definir Ishikawa, Matriz de Coherencia, y funcionalidades principales (gestión de cursos, usuarios y noticias).</p>
                  <p>Identificación de partes interesadas y asignación de roles clave dentro de Platypus Systems y HHM.</p>
                  <p>Recepción de la carta de aceptación y aprobación de los términos acordados en ella, que incluye límites, responsabilidades, costos, entre otros .</p>
                  <ul className="social">
                    <li>
                      <a href="./" className="button btn project-btn">
                        <i className="fa fa-book"></i>TDR
                      </a></li>
                    <li>
                      <a href="./" className="button btn project-btn">
                        <i className="fa fa-book"></i>Carta Aceptación
                      </a>
                    </li>
                    <li>
                      <a href="./" className="button btn project-btn">
                        <i className="fa fa-book"></i>Análisis de Proyecto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Planificación</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 1 Sprint</p>
                  <p>Desarrollo del plan de proyecto detallado, alineado con la metodología SCRUM.</p>
                  <p>Selección y confirmación de tecnologías: frameworks para desarrollo frontend y backend.</p>
                  <p>Análisis y planificación de riesgos, incluyendo mitigación para dependencia de servicios externos (hosting, internet y servidores de HHM).</p>
                  <ul className="social">
                    <li>
                      <a href="./" className="button btn project-btn">
                        <i className="fa fa-book"></i>Gestión de Riesgos
                      </a></li>
                  </ul>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Diseño</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 2 Sprints</p>
                  <p>Desarrollo de la identidad visual basada en la imagen corporativa de HHM.</p>
                  <p>Creación de wireframes y mockups para las interfaces de usuario, como ser: páginas de registros, página de login, página de reuniones, etc.</p>
                  <p>Creación de diagramas UML de: casos de uso, secuencia, actividades, despliegue, etc. </p>
                  <p>Creación de diagramas C4, WAE y IDEF.</p>
                  <ul className="social">
                    <li>
                      <a href="./" className="button btn project-btn">
                        <i className="fa fa-book"></i>Requerimientos y Diagramas
                      </a>
                    </li>
                    <li>
                      <a href="./" className="button btn project-btn">
                        <i className="fa fa-book"></i>Mockups
                      </a>
                    </li>
                  </ul>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Desarrollo</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 8 Sprints</p>
                  <p>Creación de la API REST para la gestión de casos legales, abogados, clientes y documentos</p>
                  <p>Conexión con la Base de Datos implementada</p>
                  <p>Desarrollo de los módulos determinados:</p>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Pruebas y Control de Calidad</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 8 Sprints</p>
                  <p>Desarrollo del plan de proyecto detallado, alineado con la metodología SCRUM.</p>
                  <p>Selección y confirmación de tecnologías: frameworks para desarrollo frontend y backend.</p>
                  <p>Análisis y planificación de riesgos, incluyendo mitigación para dependencia de servicios externos (hosting, internet y servidores de HHM).</p>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Implementación</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 3 Sprint</p>
                  <p>Desarrollo del plan de proyecto detallado, alineado con la metodología SCRUM.</p>
                  <p>Selección y confirmación de tecnologías: frameworks para desarrollo frontend y backend.</p>
                  <p>Análisis y planificación de riesgos, incluyendo mitigación para dependencia de servicios externos (hosting, internet y servidores de HHM).</p>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Cierre</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 1 Sprint</p>
                  <p>Desarrollo del plan de proyecto detallado, alineado con la metodología SCRUM.</p>
                  <p>Selección y confirmación de tecnologías: frameworks para desarrollo frontend y backend.</p>
                  <p>Análisis y planificación de riesgos, incluyendo mitigación para dependencia de servicios externos (hosting, internet y servidores de HHM).</p>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <img src="images/cronograma.png" alt="resume" />
        </Slide>
      </section>
    );
  }
}

export default Resume;
