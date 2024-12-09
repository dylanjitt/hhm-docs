import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {

  render() {

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
                      <a href="https://docs.google.com/document/d/1iQFsgTeXS-wd5pUSHQMbinuMRNR_7bSohIXjzx0nw8c/edit?tab=t.0#heading=h.jajdz34tjm25" className="button btn project-btn">
                        <i className="fa fa-book"></i>TDR
                      </a></li>
                    <li>
                      <a href="https://docs.google.com/document/d/12vWCk96-_eGIAd9Czp1BtJRidz3wC5ynS2ZT4VpR0_A/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Carta Aceptación
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/17FAlfiXMhPAgFTBRuPuLgf_ntUbgHl4APuzW-Jfzhgs/edit?usp=sharing" className="button btn project-btn">
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
                      <a href="https://docs.google.com/spreadsheets/d/1PMkYrSrFS-HTbK0r0QUpqhGjvLVM9ckJyHCSjd_ezvw/edit?gid=1352027164#gid=1352027164" className="button btn project-btn">
                        <i className="fa fa-book"></i>Gestión de Riesgos
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/1vlzMnaeCME9-dd6U_jWe8ZTcPb6H2H1BWivmSjnI-VA/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Costos
                      </a>
                    </li>
                    <li>
                      <a href="https://trello.com/b/q3lSm1NQ/rommos-e-learning" className="button btn project-btn">
                        <i className="fa fa-book"></i>Trello
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
                      <a href="https://docs.google.com/document/d/17FAlfiXMhPAgFTBRuPuLgf_ntUbgHl4APuzW-Jfzhgs/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Requerimientos y Diagramas
                      </a>
                    </li>
                    <li>
                      <a href="https://www.figma.com/design/DWQoOQW3kgxNPTrlzHTdC1/HHM-SYSTEM?node-id=3-3&t=jVyDKKY2KtBeGNqd-1" className="button btn project-btn">
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
                  <div style={{margin:"32px"}}><li style={{color: "black"}}>
                    Registros
                  </li>
                  <li style={{color: "black"}}>
                    Agenda de Reuniones
                  </li>
                  <li style={{color: "black"}}>
                    Gestión de Documentos
                  </li>
                  <li style={{color: "black"}}>
                    Reporte de Casos
                  </li>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="https://docs.google.com/spreadsheets/d/11_N8xA6y-qBsXecVJ3a7ZrUoMfN-eSHRXKQxlDFkxLY/edit?usp=sharing" className="button btn project-btn">
                        <i className="fa fa-book"></i>User Stories
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
                <span>Pruebas y Control de Calidad</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 8 Sprints</p>
                  <p>Pruebas de Unidad e Integración: Asegurar que todas las funcionalidades operan según lo planeado.</p>
                  <p>Pruebas de rendimiento y estrés: Optimización del tiempo de carga y estabilidad para su uso exclusivo en computadoras y laptops.</p>
                  <p>Pruebas E2E y resolución de problemas técnicos identificados durante las pruebas.</p>
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
                  <ul className="social">
                    <li>
                      <a href="https://docs.google.com/document/d/18ZNytlDO7PSw9AFIHjhXzkhpaY8WNOOrQtX9ckleWU8/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Pruebas y Hosting
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
                <span>Cierre</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 1 Sprint</p>
                  <p>Desarrollo del plan de proyecto detallado, alineado con la metodología SCRUM.</p>
                  <p>Selección y confirmación de tecnologías: frameworks para desarrollo frontend y backend.</p>
                  <p>Análisis y planificación de riesgos, incluyendo mitigación para dependencia de servicios externos (hosting, internet y servidores de HHM).</p>
                  <ul className="social">
                    <li>
                      <a href="https://docs.google.com/document/d/12vWCk96-_eGIAd9Czp1BtJRidz3wC5ynS2ZT4VpR0_A/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Carta de entrega
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/1FRzVjaAsyvuGDkZcG5wruj889vAbT1g21IO2U2eyC98/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Manual de Sistema
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/11lbW1Mq5X6hDPO_AemQbp5TVhrhkbgsQ8pnG2ClJoTo/edit?tab=t.0" className="button btn project-btn">
                        <i className="fa fa-book"></i>Manual de Usuario
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/1OmtSOOPgKmHZr9U5HvLqt-JaJv9MQg-I6KxLcBmJFQY/edit?tab=t.0#heading=h.bbckh529gacq" className="button btn project-btn">
                        <i className="fa fa-book"></i>Evaluación y Feedback
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
                <span>Mantenimiento</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                  <p><b>Duración:</b> 3 Meses desde la entrega del sistema</p>
                  <p>Soporte técnico inicial: Supervisión del sistema durante el primer mes posterior al lanzamiento para resolver errores no detectados en las pruebas.</p>
                  <p>Actualizaciones menores: Ajustes en la interfaz o funcionalidad, según lo definido en la Carta de Aceptación y subsecuentes adendas.</p>
                  <p>Documentación adicional: Registro de problemas reportados y soluciones implementadas.</p>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div style ={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
          <img src="images/cronograma.png" alt="resume" />
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
